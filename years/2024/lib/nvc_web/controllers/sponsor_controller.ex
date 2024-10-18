defmodule NvcWeb.SponsorController do
  use NvcWeb, :controller

  alias Nvc.Sponsors
  alias Nvc.Sponsors.Sponsor

  def index(conn, _params) do
    sponsors = Sponsors.list_sponsors()
    render(conn, :index, sponsors: sponsors)
  end

  def new(conn, _params) do
    changeset = Sponsors.change_sponsor(%Sponsor{})
    render(conn, :new, changeset: changeset)
  end

  def create(conn, %{"sponsor" => sponsor_params} = form_data) do
    case Sponsors.create_sponsor(sponsor_params) do
      {:ok, sponsor} ->
        maybe_save_image(form_data, sponsor)

        conn
        |> put_flash(:info, "Sponsor created successfully.")
        |> redirect(to: ~p"/sponsors")


      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new, changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    sponsor = Sponsors.get_sponsor!(id)
    render(conn, :show, sponsor: sponsor)
  end

  def edit(conn, %{"id" => id}) do
    sponsor = Sponsors.get_sponsor!(id)
    changeset = Sponsors.change_sponsor(sponsor)
    render(conn, :edit, 
      sponsor: sponsor,
      admin_actions: [
        %{
          href: ~p"/sponsors/#{sponsor}",
          method: "delete",
          "data-confirm": "Are you sure? This cannot be undone.",
          label: "Delete Sponsor"
        }
      ],
      changeset: changeset
    )
  end

  def update(conn, %{"id" => id, "sponsor" => sponsor_params} = form_data) do
    sponsor = Sponsors.get_sponsor!(id)

    case Sponsors.update_sponsor(sponsor, sponsor_params) do
      {:ok, sponsor} ->
        maybe_save_image(form_data, sponsor)

        conn
        |> put_flash(:info, "Sponsor updated successfully.")
        |> redirect(to: ~p"/sponsors")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :edit, sponsor: sponsor, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    sponsor = Sponsors.get_sponsor!(id)
    {:ok, _sponsor} = Sponsors.delete_sponsor(sponsor)

    conn
    |> put_flash(:info, "Sponsor deleted successfully.")
    |> redirect(to: ~p"/sponsors")
  end

  defp maybe_save_image(form_data, %Sponsor{} = sponsor) do
    case form_data do
      %{"image_upload" => %Plug.Upload{} = image} ->
        image |> Sponsors.save_image!(sponsor)
      _ -> nil
    end
  end
end
