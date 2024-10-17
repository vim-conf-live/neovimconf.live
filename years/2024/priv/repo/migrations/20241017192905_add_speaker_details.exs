defmodule Nvc.Repo.Migrations.AddSpeakerDetails do
  use Ecto.Migration

  def change do
    alter table "speakers" do
      add :job, :string
      add :description, :text
    end
  end
end
