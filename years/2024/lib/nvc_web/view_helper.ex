defmodule NvcWeb.ViewHelper do
  alias Nvc.Accounts.User

  def is_admin?(nil), do: false
  def is_admin?(%User{} = user) do
    user.role == :admin
  end
end
