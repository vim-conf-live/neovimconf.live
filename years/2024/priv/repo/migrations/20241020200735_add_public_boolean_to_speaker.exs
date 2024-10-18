defmodule Nvc.Repo.Migrations.AddPublicBooleanToSpeaker do
  use Ecto.Migration

  def change do
    alter table("speakers") do
      add :public, :boolean
    end
  end
end
