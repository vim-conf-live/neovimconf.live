defmodule NvcWeb.SignupController do
  alias Nvc.Accounts.User
  alias Nvc.Accounts
  use NvcWeb, :controller

  def new(%{assigns: %{current_user: %User{}}} = conn, _params) do
    render(conn, :done)
  end

  def new(conn, _params) do
    changeset = Accounts.change_user_registration(%User{})
    render(conn, :new, changeset: changeset)
  end

  def create(conn, %{"user" => user_params, "altcha" => payload}) do
    hmac_key = Application.fetch_env!(:nvc, :hmac_key)

    with true <- Altcha.verify_solution(payload, hmac_key, true),
         {:ok, user} <- Accounts.register_user(user_params),
         {:ok, _} <- Accounts.deliver_user_confirmation_instructions(user, &url(~p"/signup/confirm/#{&1}")) do
      redirect(conn, to: ~p"/signup/ok")
    else
      false ->
        render(conn, :challenge_failed)

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new, changeset: changeset)
    end
  end

  def confirm(conn, %{"token" => token}) do
    case Accounts.confirm_user(token) do
      {:ok, user} ->
        conn
        |> NvcWeb.UserAuth.log_in_user(user)
        |> redirect(to: ~p"/")

      :error ->
        render(conn, :confirm_error)
    end
  end

  def create_ok(conn, _), do: render(conn, :confirm_sent)
end
