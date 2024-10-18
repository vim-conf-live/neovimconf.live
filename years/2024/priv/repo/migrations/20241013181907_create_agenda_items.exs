defmodule Nvc.Repo.Migrations.CreateAgendaItems do
  use Ecto.Migration

  def change do
    create table(:agenda_items) do
      add :title, :string
      add :start, :naive_datetime
      add :end, :naive_datetime
      add :description, :text
      add :type, :string
      add :speaker_id, references(:speakers, on_delete: :nothing)

      timestamps(type: :utc_datetime)
    end

    create index(:agenda_items, [:speaker_id])
  end
end
