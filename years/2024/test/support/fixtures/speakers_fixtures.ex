defmodule Nvc.SpeakersFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Nvc.Speakers` context.
  """

  @doc """
  Generate a speaker.
  """
  def speaker_fixture(attrs \\ %{}) do
    {:ok, speaker} =
      attrs
      |> Enum.into(%{
        bio: %{},
        end: ~N[2024-10-11 13:24:00],
        handle: "some handle",
        name: "some name",
        start: ~N[2024-10-11 13:24:00],
        talk: "some talk"
      })
      |> Nvc.Speakers.create_speaker()

    speaker
  end
end
