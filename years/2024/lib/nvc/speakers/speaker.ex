defmodule Nvc.Speakers.Speaker do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Phoenix.Param, key: :handle}
  schema "speakers" do
    field :handle, :string
    field :name, :string
    field :start, :utc_datetime, default: ~U<2024-11-19 09:30:00Z>
    field :end, :utc_datetime, default: ~U<2024-11-19 09:30:00Z>
    field :talk, :string
    field :photo, :string
    field :socials, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(speaker, attrs) do
    speaker
    |> cast(attrs, [:name, :handle, :start, :end, :talk, :socials, :photo])
    |> validate_required([:name, :handle, :start, :end, :talk])
    |> unique_constraint(:handle)
  end
end
