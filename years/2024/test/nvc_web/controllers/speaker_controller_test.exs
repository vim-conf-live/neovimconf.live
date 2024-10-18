defmodule NvcWeb.SpeakerControllerTest do
  use NvcWeb.ConnCase

  import Nvc.SpeakersFixtures

  @create_attrs %{handle: "some handle", name: "some name", start: ~N[2024-10-11 13:24:00], end: ~N[2024-10-11 13:24:00], talk: "some talk", bio: %{}}
  @update_attrs %{handle: "some updated handle", name: "some updated name", start: ~N[2024-10-12 13:24:00], end: ~N[2024-10-12 13:24:00], talk: "some updated talk", bio: %{}}
  @invalid_attrs %{handle: nil, name: nil, start: nil, end: nil, talk: nil, bio: nil}

  describe "index" do
    test "lists all speakers", %{conn: conn} do
      conn = get(conn, ~p"/speakers")
      assert html_response(conn, 200) =~ "Listing Speakers"
    end
  end

  describe "new speaker" do
    test "renders form", %{conn: conn} do
      conn = get(conn, ~p"/speakers/new")
      assert html_response(conn, 200) =~ "New Speaker"
    end
  end

  describe "create speaker" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, ~p"/speakers", speaker: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == ~p"/speakers/#{id}"

      conn = get(conn, ~p"/speakers/#{id}")
      assert html_response(conn, 200) =~ "Speaker #{id}"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, ~p"/speakers", speaker: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Speaker"
    end
  end

  describe "edit speaker" do
    setup [:create_speaker]

    test "renders form for editing chosen speaker", %{conn: conn, speaker: speaker} do
      conn = get(conn, ~p"/speakers/#{speaker}/edit")
      assert html_response(conn, 200) =~ "Edit Speaker"
    end
  end

  describe "update speaker" do
    setup [:create_speaker]

    test "redirects when data is valid", %{conn: conn, speaker: speaker} do
      conn = put(conn, ~p"/speakers/#{speaker}", speaker: @update_attrs)
      assert redirected_to(conn) == ~p"/speakers/#{speaker}"

      conn = get(conn, ~p"/speakers/#{speaker}")
      assert html_response(conn, 200) =~ "some updated handle"
    end

    test "renders errors when data is invalid", %{conn: conn, speaker: speaker} do
      conn = put(conn, ~p"/speakers/#{speaker}", speaker: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Speaker"
    end
  end

  describe "delete speaker" do
    setup [:create_speaker]

    test "deletes chosen speaker", %{conn: conn, speaker: speaker} do
      conn = delete(conn, ~p"/speakers/#{speaker}")
      assert redirected_to(conn) == ~p"/speakers"

      assert_error_sent 404, fn ->
        get(conn, ~p"/speakers/#{speaker}")
      end
    end
  end

  defp create_speaker(_) do
    speaker = speaker_fixture()
    %{speaker: speaker}
  end
end
