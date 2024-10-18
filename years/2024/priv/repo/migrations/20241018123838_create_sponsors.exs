defmodule Nvc.Repo.Migrations.CreateSponsors do
  use Ecto.Migration

  def change do
    create table(:sponsors) do
      add :name, :string
      add :description, :text
      add :position, :integer
      add :image, :string
      add :website, :string

      timestamps(type: :utc_datetime)
    end
  end
end
