defmodule NvcWeb.UserWaitlistLiveTest do
  use NvcWeb.ConnCase

  import Phoenix.LiveViewTest
  import Nvc.AccountsFixtures
  alias Nvc.Accounts

  @tag :signup
  describe "Waitlist page" do
    test "renders waitlist page", %{conn: conn} do
      {:ok, _lv, html} = live(conn, ~p"/")

      assert html =~ "Enter your email"
      assert html =~ "notify me"
    end

    test "renders errors for invalid data", %{conn: conn} do
      {:ok, lv, _html} = live(conn, ~p"/")

      result =
        lv
        |> element("#waitlist_form")
        |> render_submit(user: %{"email" => "with spaces"})

      assert result =~ "must have the @ sign and no spaces"
    end
  end

  @tag :signup
  describe "register user" do
    test "creates account", %{conn: conn} do
      {:ok, lv, html} = live(conn, ~p"/")

      email = unique_user_email()

      result =
        lv
        |> element("#waitlist_form")
        |> render_submit(user: %{"email" => email})

      assert Accounts.get_user_by_email!(email)
      assert_redirect(lv, ~p"/yay")
    end
  end
end
