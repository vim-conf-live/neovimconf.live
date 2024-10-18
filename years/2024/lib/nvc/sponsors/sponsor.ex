defmodule Nvc.Sponsors.Sponsor do
  use Ecto.Schema
  import Ecto.Changeset

  schema "sponsors" do
    field :name, :string
    field :position, :integer
    field :description, :string
    field :image, :string
    field :website, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(sponsor, attrs) do
    sponsor
    |> cast(attrs, [:name, :description, :image, :website])
    |> validate_required([:name, :description, :website])
  end
end
