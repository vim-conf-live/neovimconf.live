defmodule Nvc.SponsorsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Nvc.Sponsors` context.
  """

  @doc """
  Generate a sponsor.
  """
  def sponsor_fixture(attrs \\ %{}) do
    {:ok, sponsor} =
      attrs
      |> Enum.into(%{
        description: "some description",
        image: "some image",
        name: "some name"
      })
      |> Nvc.Sponsors.create_sponsor()

    sponsor
  end
end
