defmodule NvcWeb.Agenda.ItemController do
  use NvcWeb, :controller

  alias Nvc.Speakers
  alias Nvc.Agenda
  alias Nvc.Agenda.Item

  def index(conn, _params) do
    agenda_items = Agenda.list_agenda_items()

    render(conn, :index,
      agenda_items: agenda_items,
      admin_actions: [
        %{
          href: ~p"/agenda/new",
          label: "Add Talk"
        }
      ]
    )
  end

  def new(conn, _params) do
    changeset = Agenda.change_item(%Item{})

    render(conn, :new,
      changeset: changeset,
      speakers: speaker_options()
    )
  end

  def create(conn, %{"item" => item_params}) do
    case Agenda.create_item(item_params) do
      {:ok, _} ->
        conn
        |> put_flash(:info, "Item created successfully.")
        |> redirect(to: ~p"/agenda")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new,
          changeset: changeset,
          speakers: speaker_options()
        )
    end
  end

  def show(conn, %{"id" => id}) do
    item = Agenda.get_item!(id)

    render(conn, :show,
      talk: item,
      speaker: item.speaker,
      socials: Speakers.social_links(item.speaker),
      admin_actions: [
        %{
          href: ~p"/agenda/#{item}/edit",
          label: "Edit talk"
        },
        %{
          href: ~p"/speakers/#{item.speaker}/edit",
          label: "Edit speaker"
        }
      ]
    )
  end


  def edit(conn, %{"id" => id}) do
    item = Agenda.get_item!(id)
    changeset = Agenda.change_item(item)

    render(conn, :edit,
      item: item,
      changeset: changeset,
      speakers: speaker_options(),
      admin_actions: [
        %{
          href: ~p"/agenda/#{item}",
          method: "delete",
          label: "Delete this talk",
          class: "bg-red-500"
        }
      ]
    )
  end

  def update(conn, %{"id" => id, "item" => item_params}) do
    item = Agenda.get_item!(id)

    case Agenda.update_item(item, item_params) do
      {:ok, _} ->
        conn
        |> put_flash(:info, "Item updated successfully.")
        |> redirect(to: ~p"/agenda")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :edit, item: item, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    item = Agenda.get_item!(id)
    {:ok, _item} = Agenda.delete_item(item)

    conn
    |> put_flash(:info, "Item deleted successfully.")
    |> redirect(to: ~p"/agenda")
  end

  defp speaker_options do
    Speakers.list_speakers()
    |> Enum.map(fn speaker -> {speaker.name, speaker.id} end)
    |> Enum.concat([{" - none - ", nil}])
    |> Enum.reverse()
  end
end
