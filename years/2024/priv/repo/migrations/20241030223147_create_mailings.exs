defmodule Nvc.Repo.Migrations.CreateMailings do
  use Ecto.Migration

  def change do
    create table(:mailings) do
      add :subject, :string
      add :body, :text
      add :status, :string
      add :scheduled_for, :utc_datetime
      add :finished_at, :utc_datetime

      timestamps(type: :utc_datetime)
    end
  end
end
