defmodule NvcWeb.SponsorControllerTest do
  use NvcWeb.ConnCase

  import Nvc.SponsorsFixtures

  @create_attrs %{name: "some name", description: "some description", image: "some image"}
  @update_attrs %{name: "some updated name", description: "some updated description", image: "some updated image"}
  @invalid_attrs %{name: nil, description: nil, image: nil}

  describe "index" do
    test "lists all sponsors", %{conn: conn} do
      conn = get(conn, ~p"/sponsors")
      assert html_response(conn, 200) =~ "Listing Sponsors"
    end
  end

  describe "new sponsor" do
    test "renders form", %{conn: conn} do
      conn = get(conn, ~p"/sponsors/new")
      assert html_response(conn, 200) =~ "New Sponsor"
    end
  end

  describe "create sponsor" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, ~p"/sponsors", sponsor: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == ~p"/sponsors/#{id}"

      conn = get(conn, ~p"/sponsors/#{id}")
      assert html_response(conn, 200) =~ "Sponsor #{id}"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, ~p"/sponsors", sponsor: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Sponsor"
    end
  end

  describe "edit sponsor" do
    setup [:create_sponsor]

    test "renders form for editing chosen sponsor", %{conn: conn, sponsor: sponsor} do
      conn = get(conn, ~p"/sponsors/#{sponsor}/edit")
      assert html_response(conn, 200) =~ "Edit Sponsor"
    end
  end

  describe "update sponsor" do
    setup [:create_sponsor]

    test "redirects when data is valid", %{conn: conn, sponsor: sponsor} do
      conn = put(conn, ~p"/sponsors/#{sponsor}", sponsor: @update_attrs)
      assert redirected_to(conn) == ~p"/sponsors/#{sponsor}"

      conn = get(conn, ~p"/sponsors/#{sponsor}")
      assert html_response(conn, 200) =~ "some updated name"
    end

    test "renders errors when data is invalid", %{conn: conn, sponsor: sponsor} do
      conn = put(conn, ~p"/sponsors/#{sponsor}", sponsor: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Sponsor"
    end
  end

  describe "delete sponsor" do
    setup [:create_sponsor]

    test "deletes chosen sponsor", %{conn: conn, sponsor: sponsor} do
      conn = delete(conn, ~p"/sponsors/#{sponsor}")
      assert redirected_to(conn) == ~p"/sponsors"

      assert_error_sent 404, fn ->
        get(conn, ~p"/sponsors/#{sponsor}")
      end
    end
  end

  defp create_sponsor(_) do
    sponsor = sponsor_fixture()
    %{sponsor: sponsor}
  end
end
