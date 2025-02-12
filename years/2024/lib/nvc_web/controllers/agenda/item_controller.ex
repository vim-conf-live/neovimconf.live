defmodule NvcWeb.Agenda.ItemController do
  use NvcWeb, :controller

  alias Nvc.Speakers
  alias Nvc.Agenda
  alias Nvc.Agenda.Item

  def index(conn, _params) do
    agenda_items = Agenda.list_agenda_items()
      |> Agenda.calculate_start_times(~N[2024-11-19 15:00:00])

    conn
    |> render(agenda_items: agenda_items)
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
    redirect(conn, to: ~p"/speakers/#{item.speaker}")
  end

  def edit(conn, %{"id" => id}) do
    item = Agenda.get_item!(id)
    changeset = Agenda.change_item(item)

    render(conn, :edit,
      item: item,
      changeset: changeset,
      speakers: speaker_options()
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
        render(conn, :edit, item: item, changeset: changeset,
      speakers: speaker_options()
        )
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
    Speakers.list_speakers(:all)
    |> Enum.map(fn speaker -> {speaker.name, speaker.id} end)
    |> Enum.concat([{" - none - ", nil}])
    |> Enum.reverse()
  end
end
