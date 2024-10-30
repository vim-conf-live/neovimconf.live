defmodule Nvc.Broadcasts.Mailing do
  use Ecto.Schema
  import Ecto.Changeset

  schema "mailings" do
    field :status, Ecto.Enum, values: [:draft, :scheduled, :sending, :completed], default: :draft
    field :body, :string
    field :subject, :string
    field :scheduled_for, :utc_datetime
    field :finished_at, :utc_datetime

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(mailing, attrs) do
    mailing
    |> cast(attrs, [:subject, :body])
    |> validate_required([:subject, :body])
  end

  def arm_changeset(mailing, attrs) do
    mailing
    |> cast(attrs, [:scheduled_for])
    |> validate_required([:scheduled_for])
  end
end
