defmodule Nvc.AgendaFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Nvc.Agenda` context.
  """

  @doc """
  Generate a item.
  """
  def item_fixture(attrs \\ %{}) do
    {:ok, item} =
      attrs
      |> Enum.into(%{
        description: "some description",
        end: ~N[2024-10-12 18:19:00],
        start: ~N[2024-10-12 18:19:00],
        title: "some title",
        type: "some type"
      })
      |> Nvc.Agenda.create_item()

    item
  end
end
