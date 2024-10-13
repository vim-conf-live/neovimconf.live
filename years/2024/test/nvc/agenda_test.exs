defmodule Nvc.AgendaTest do
  use Nvc.DataCase

  alias Nvc.Agenda

  describe "agenda_items" do
    alias Nvc.Agenda.Item

    import Nvc.AgendaFixtures

    @invalid_attrs %{start: nil, type: nil, description: nil, title: nil, end: nil}

    test "list_agenda_items/0 returns all agenda_items" do
      item = item_fixture()
      assert Agenda.list_agenda_items() == [item]
    end

    test "get_item!/1 returns the item with given id" do
      item = item_fixture()
      assert Agenda.get_item!(item.id) == item
    end

    test "create_item/1 with valid data creates a item" do
      valid_attrs = %{start: ~N[2024-10-12 18:19:00], type: "some type", description: "some description", title: "some title", end: ~N[2024-10-12 18:19:00]}

      assert {:ok, %Item{} = item} = Agenda.create_item(valid_attrs)
      assert item.start == ~N[2024-10-12 18:19:00]
      assert item.type == "some type"
      assert item.description == "some description"
      assert item.title == "some title"
      assert item.end == ~N[2024-10-12 18:19:00]
    end

    test "create_item/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Agenda.create_item(@invalid_attrs)
    end

    test "update_item/2 with valid data updates the item" do
      item = item_fixture()
      update_attrs = %{start: ~N[2024-10-13 18:19:00], type: "some updated type", description: "some updated description", title: "some updated title", end: ~N[2024-10-13 18:19:00]}

      assert {:ok, %Item{} = item} = Agenda.update_item(item, update_attrs)
      assert item.start == ~N[2024-10-13 18:19:00]
      assert item.type == "some updated type"
      assert item.description == "some updated description"
      assert item.title == "some updated title"
      assert item.end == ~N[2024-10-13 18:19:00]
    end

    test "update_item/2 with invalid data returns error changeset" do
      item = item_fixture()
      assert {:error, %Ecto.Changeset{}} = Agenda.update_item(item, @invalid_attrs)
      assert item == Agenda.get_item!(item.id)
    end

    test "delete_item/1 deletes the item" do
      item = item_fixture()
      assert {:ok, %Item{}} = Agenda.delete_item(item)
      assert_raise Ecto.NoResultsError, fn -> Agenda.get_item!(item.id) end
    end

    test "change_item/1 returns a item changeset" do
      item = item_fixture()
      assert %Ecto.Changeset{} = Agenda.change_item(item)
    end
  end
end
