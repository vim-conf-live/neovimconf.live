defmodule Nvc.Speakers.Speaker do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Phoenix.Param, key: :handle}
  schema "speakers" do
    field :handle, :string
    field :name, :string

    field :job, :string
    field :description, :string

    field :photo, :string
    field :socials, :string

    has_many :talks, Nvc.Agenda.Item

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(speaker, attrs) do
    speaker
    |> cast(attrs, [:name, :handle, :socials, :photo, :job, :description])
    |> validate_required([:name, :handle])
    |> unique_constraint(:handle)
  end
end
