defmodule Nvc.Repo.Migrations.AddImportFieldsToUser do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add_if_not_exists :source, :string, default: "signup"
      add_if_not_exists :imported_at, :utc_datetime
    end
  end
end
