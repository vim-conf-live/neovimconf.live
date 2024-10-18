defmodule Nvc.Repo.Migrations.AddRoleToUsers do
  use Ecto.Migration

  def change do
    alter table("users") do
      add :role, :string, default: "guest"
    end
  end
end
