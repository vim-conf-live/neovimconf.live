defmodule Nvc.Agenda.Item do
  use Ecto.Schema
  import Ecto.Changeset

  schema "agenda_items" do
    field :start, :utc_datetime, default: ~U<2024-11-19 09:30:00Z>
    field :end, :utc_datetime, default: ~U<2024-11-19 09:30:00Z>
    field :type, :string, default: "talk"
    field :description, :string
    field :title, :string
    belongs_to :speaker, Nvc.Speakers.Speaker

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:title, :start, :end, :description, :type, :speaker_id])
    |> validate_type()
    |> validate_required([:title, :start, :end, :description, :type])
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
