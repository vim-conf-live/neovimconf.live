defmodule Nvc.SponsorsTest do
  use Nvc.DataCase

  alias Nvc.Sponsors

  describe "sponsors" do
    alias Nvc.Sponsors.Sponsor

    import Nvc.SponsorsFixtures

    @invalid_attrs %{name: nil, description: nil, image: nil}

    test "list_sponsors/0 returns all sponsors" do
      sponsor = sponsor_fixture()
      assert Sponsors.list_sponsors() == [sponsor]
    end

    test "get_sponsor!/1 returns the sponsor with given id" do
      sponsor = sponsor_fixture()
      assert Sponsors.get_sponsor!(sponsor.id) == sponsor
    end

    test "create_sponsor/1 with valid data creates a sponsor" do
      valid_attrs = %{name: "some name", description: "some description", image: "some image"}

      assert {:ok, %Sponsor{} = sponsor} = Sponsors.create_sponsor(valid_attrs)
      assert sponsor.name == "some name"
      assert sponsor.description == "some description"
      assert sponsor.image == "some image"
    end

    test "create_sponsor/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Sponsors.create_sponsor(@invalid_attrs)
    end

    test "update_sponsor/2 with valid data updates the sponsor" do
      sponsor = sponsor_fixture()
      update_attrs = %{name: "some updated name", description: "some updated description", image: "some updated image"}

      assert {:ok, %Sponsor{} = sponsor} = Sponsors.update_sponsor(sponsor, update_attrs)
      assert sponsor.name == "some updated name"
      assert sponsor.description == "some updated description"
      assert sponsor.image == "some updated image"
    end

    test "update_sponsor/2 with invalid data returns error changeset" do
      sponsor = sponsor_fixture()
      assert {:error, %Ecto.Changeset{}} = Sponsors.update_sponsor(sponsor, @invalid_attrs)
      assert sponsor == Sponsors.get_sponsor!(sponsor.id)
    end

    test "delete_sponsor/1 deletes the sponsor" do
      sponsor = sponsor_fixture()
      assert {:ok, %Sponsor{}} = Sponsors.delete_sponsor(sponsor)
      assert_raise Ecto.NoResultsError, fn -> Sponsors.get_sponsor!(sponsor.id) end
    end

    test "change_sponsor/1 returns a sponsor changeset" do
      sponsor = sponsor_fixture()
      assert %Ecto.Changeset{} = Sponsors.change_sponsor(sponsor)
    end
  end
end
