defmodule Nvc.Repo.Migrations.TalkDuration do
  use Ecto.Migration

  def change do
    alter table "agenda_items" do
      remove :start
      remove :end
      add :duration, :float
      add :position, :integer
    end
  end
end
