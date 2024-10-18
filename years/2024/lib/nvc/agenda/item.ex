defmodule Nvc.Agenda.Item do
  use Ecto.Schema
  import Ecto.Changeset

  schema "agenda_items" do
    field :duration, :float, default: 30.0
    field :position, :integer
    field :type, :string, default: "talk"
    field :description, :string
    field :title, :string
    belongs_to :speaker, Nvc.Speakers.Speaker

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:title, :duration, :position, :description, :type, :speaker_id])
    |> validate_type()
    |> validate_required([:title, :type])
  end

  defp validate_type(changeset) do
    case get_field(changeset, :type) do
      "break" ->
        changeset

      _ ->
        changeset |> validate_required([:speaker_id], message: "A speaker is required for this agenda item type")

    end
  end
end
