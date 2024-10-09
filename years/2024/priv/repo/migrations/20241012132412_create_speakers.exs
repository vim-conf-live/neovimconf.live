defmodule Nvc.Repo.Migrations.CreateSpeakers do
  use Ecto.Migration

  def change do
    create table(:speakers) do
      add :name, :string
      add :handle, :string
      add :start, :naive_datetime
      add :end, :naive_datetime
      add :talk, :string
      add :photo, :string
      add :socials, :string

      timestamps(type: :utc_datetime)
    end

    create unique_index(:speakers, [:handle])
  end
end
