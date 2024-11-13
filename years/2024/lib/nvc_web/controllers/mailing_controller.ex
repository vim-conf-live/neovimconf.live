defmodule NvcWeb.MailingController do
  use NvcWeb, :controller

  alias Nvc.Broadcasts
  alias Nvc.Broadcasts.Mailing

  def index(conn, _params) do
    mailings = Broadcasts.list_mailings()
    render(conn, :index, mailings: mailings)
  end

  def new(conn, _params) do
    changeset = Broadcasts.change_mailing(%Mailing{})
    render(conn, :new, changeset: changeset)
  end

  def sending(conn, %{"id" => id}) do
    mailing = Broadcasts.get_mailing!(id)
    render(conn, :sending, mailing: mailing)
  end

  def send(conn, %{"id" => id}) do
    mailing = Broadcasts.get_mailing!(id)
    Broadcasts.launch_mailing!(mailing)
    redirect(conn, to: ~p"/mailings/#{mailing}/sending")
  end

  def create(conn, %{"mailing" => mailing_params}) do
    case Broadcasts.create_mailing(mailing_params) do
      {:ok, mailing} ->
        conn
        |> put_flash(:info, "Mailing created successfully.")
        |> redirect(to: ~p"/mailings/#{mailing}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new, changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    mailing = Broadcasts.get_mailing!(id)
    changeset = Broadcasts.change_mailing(mailing)

    case mailing.status do
      :draft -> conn |> render(:show, mailing: mailing, changeset: changeset)
      :sent -> conn 
        |> redirect(to: ~p"/mailings/#{mailing}/sending")

      status -> conn 
        |> put_flash(:info, "Unhandled mailing status: #{status}")
        |> redirect(to: ~p"/mailings/")
    end
  end

  def edit(conn, %{"id" => id}) do
    mailing = Broadcasts.get_mailing!(id)
    changeset = Broadcasts.change_mailing(mailing)

    case mailing.status do
      :draft -> conn |> render(:edit, mailing: mailing, changeset: changeset)
      :sent -> conn 
        |> redirect(to: ~p"/mailings/#{mailing}/sending")

      status -> conn 
        |> put_flash(:info, "Unhandled mailing status: #{status}")
        |> redirect(to: ~p"/mailings/#{mailing}/sending")
    end
  end

  def update(conn, %{"id" => id, "mailing" => mailing_params}) do
    mailing = Broadcasts.get_mailing!(id)

    case Broadcasts.update_mailing(mailing, mailing_params) do
      {:ok, mailing} ->
        conn
        |> put_flash(:info, "Mailing updated successfully.")
        |> redirect(to: ~p"/mailings/#{mailing}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :edit, mailing: mailing, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    mailing = Broadcasts.get_mailing!(id)
    {:ok, _mailing} = Broadcasts.delete_mailing(mailing)

    conn
    |> put_flash(:info, "Mailing deleted successfully.")
    |> redirect(to: ~p"/mailings")
  end
end
