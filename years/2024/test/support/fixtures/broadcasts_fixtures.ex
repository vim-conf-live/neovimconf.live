defmodule Nvc.BroadcastsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Nvc.Broadcasts` context.
  """

  @doc """
  Generate a mailing.
  """
  def mailing_fixture(attrs \\ %{}) do
    {:ok, mailing} =
      attrs
      |> Enum.into(%{
        body: "some body",
        finished_at: ~U[2024-10-29 22:31:00Z],
        scheduled_for: ~U[2024-10-29 22:31:00Z],
        status: :draft,
        subject: "some subject"
      })
      |> Nvc.Broadcasts.create_mailing()

    mailing
  end
end
