defmodule Nvc.Repo.Migrations.AddTypeToSpeaker do
  use Ecto.Migration

  def change do
    alter table("speakers") do
      add :type, :string
    end
  end
end
