defmodule NvcWeb.MailingControllerTest do
  use NvcWeb.ConnCase

  import Nvc.BroadcastsFixtures

  @create_attrs %{status: :draft, body: "some body", subject: "some subject", scheduled_for: ~U[2024-10-29 22:31:00Z], finished_at: ~U[2024-10-29 22:31:00Z]}
  @update_attrs %{status: :scheduled, body: "some updated body", subject: "some updated subject", scheduled_for: ~U[2024-10-30 22:31:00Z], finished_at: ~U[2024-10-30 22:31:00Z]}
  @invalid_attrs %{status: nil, body: nil, subject: nil, scheduled_for: nil, finished_at: nil}

  describe "index" do
    test "lists all mailings", %{conn: conn} do
      conn = get(conn, ~p"/mailings")
      assert html_response(conn, 200) =~ "Listing Mailings"
    end
  end

  describe "new mailing" do
    test "renders form", %{conn: conn} do
      conn = get(conn, ~p"/mailings/new")
      assert html_response(conn, 200) =~ "New Mailing"
    end
  end

  describe "create mailing" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, ~p"/mailings", mailing: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == ~p"/mailings/#{id}"

      conn = get(conn, ~p"/mailings/#{id}")
      assert html_response(conn, 200) =~ "Mailing #{id}"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, ~p"/mailings", mailing: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Mailing"
    end
  end

  describe "edit mailing" do
    setup [:create_mailing]

    test "renders form for editing chosen mailing", %{conn: conn, mailing: mailing} do
      conn = get(conn, ~p"/mailings/#{mailing}/edit")
      assert html_response(conn, 200) =~ "Edit Mailing"
    end
  end

  describe "update mailing" do
    setup [:create_mailing]

    test "redirects when data is valid", %{conn: conn, mailing: mailing} do
      conn = put(conn, ~p"/mailings/#{mailing}", mailing: @update_attrs)
      assert redirected_to(conn) == ~p"/mailings/#{mailing}"

      conn = get(conn, ~p"/mailings/#{mailing}")
      assert html_response(conn, 200) =~ "some updated body"
    end

    test "renders errors when data is invalid", %{conn: conn, mailing: mailing} do
      conn = put(conn, ~p"/mailings/#{mailing}", mailing: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Mailing"
    end
  end

  describe "delete mailing" do
    setup [:create_mailing]

    test "deletes chosen mailing", %{conn: conn, mailing: mailing} do
      conn = delete(conn, ~p"/mailings/#{mailing}")
      assert redirected_to(conn) == ~p"/mailings"

      assert_error_sent 404, fn ->
        get(conn, ~p"/mailings/#{mailing}")
      end
    end
  end

  defp create_mailing(_) do
    mailing = mailing_fixture()
    %{mailing: mailing}
  end
end
