defmodule Nvc.BroadcastsTest do
  use Nvc.DataCase

  alias Nvc.Broadcasts

  describe "mailings" do
    alias Nvc.Broadcasts.Mailing

    import Nvc.BroadcastsFixtures

    @invalid_attrs %{status: nil, body: nil, subject: nil, scheduled_for: nil, finished_at: nil}

    test "list_mailings/0 returns all mailings" do
      mailing = mailing_fixture()
      assert Broadcasts.list_mailings() == [mailing]
    end

    test "get_mailing!/1 returns the mailing with given id" do
      mailing = mailing_fixture()
      assert Broadcasts.get_mailing!(mailing.id) == mailing
    end

    test "create_mailing/1 with valid data creates a mailing" do
      valid_attrs = %{status: :draft, body: "some body", subject: "some subject", scheduled_for: ~U[2024-10-29 22:31:00Z], finished_at: ~U[2024-10-29 22:31:00Z]}

      assert {:ok, %Mailing{} = mailing} = Broadcasts.create_mailing(valid_attrs)
      assert mailing.status == :draft
      assert mailing.body == "some body"
      assert mailing.subject == "some subject"
      assert mailing.scheduled_for == ~U[2024-10-29 22:31:00Z]
      assert mailing.finished_at == ~U[2024-10-29 22:31:00Z]
    end

    test "create_mailing/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Broadcasts.create_mailing(@invalid_attrs)
    end

    test "update_mailing/2 with valid data updates the mailing" do
      mailing = mailing_fixture()
      update_attrs = %{status: :scheduled, body: "some updated body", subject: "some updated subject", scheduled_for: ~U[2024-10-30 22:31:00Z], finished_at: ~U[2024-10-30 22:31:00Z]}

      assert {:ok, %Mailing{} = mailing} = Broadcasts.update_mailing(mailing, update_attrs)
      assert mailing.status == :scheduled
      assert mailing.body == "some updated body"
      assert mailing.subject == "some updated subject"
      assert mailing.scheduled_for == ~U[2024-10-30 22:31:00Z]
      assert mailing.finished_at == ~U[2024-10-30 22:31:00Z]
    end

    test "update_mailing/2 with invalid data returns error changeset" do
      mailing = mailing_fixture()
      assert {:error, %Ecto.Changeset{}} = Broadcasts.update_mailing(mailing, @invalid_attrs)
      assert mailing == Broadcasts.get_mailing!(mailing.id)
    end

    test "delete_mailing/1 deletes the mailing" do
      mailing = mailing_fixture()
      assert {:ok, %Mailing{}} = Broadcasts.delete_mailing(mailing)
      assert_raise Ecto.NoResultsError, fn -> Broadcasts.get_mailing!(mailing.id) end
    end

    test "change_mailing/1 returns a mailing changeset" do
      mailing = mailing_fixture()
      assert %Ecto.Changeset{} = Broadcasts.change_mailing(mailing)
    end
  end
end
