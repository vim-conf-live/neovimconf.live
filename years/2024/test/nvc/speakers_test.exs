defmodule Nvc.SpeakersTest do
  use Nvc.DataCase

  alias Nvc.Speakers

  describe "speakers" do
    alias Nvc.Speakers.Speaker

    import Nvc.SpeakersFixtures

    @invalid_attrs %{handle: nil, name: nil, start: nil, end: nil, talk: nil, bio: nil}

    test "list_speakers/0 returns all speakers" do
      speaker = speaker_fixture()
      assert Speakers.list_speakers() == [speaker]
    end

    test "get_speaker!/1 returns the speaker with given id" do
      speaker = speaker_fixture()
      assert Speakers.get_speaker!(speaker.id) == speaker
    end

    test "create_speaker/1 with valid data creates a speaker" do
      valid_attrs = %{handle: "some handle", name: "some name", start: ~N[2024-10-11 13:24:00], end: ~N[2024-10-11 13:24:00], talk: "some talk", bio: %{}}

      assert {:ok, %Speaker{} = speaker} = Speakers.create_speaker(valid_attrs)
      assert speaker.handle == "some handle"
      assert speaker.name == "some name"
      assert speaker.start == ~N[2024-10-11 13:24:00]
      assert speaker.end == ~N[2024-10-11 13:24:00]
      assert speaker.talk == "some talk"
      assert speaker.bio == %{}
    end

    test "create_speaker/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Speakers.create_speaker(@invalid_attrs)
    end

    test "update_speaker/2 with valid data updates the speaker" do
      speaker = speaker_fixture()
      update_attrs = %{handle: "some updated handle", name: "some updated name", start: ~N[2024-10-12 13:24:00], end: ~N[2024-10-12 13:24:00], talk: "some updated talk", bio: %{}}

      assert {:ok, %Speaker{} = speaker} = Speakers.update_speaker(speaker, update_attrs)
      assert speaker.handle == "some updated handle"
      assert speaker.name == "some updated name"
      assert speaker.start == ~N[2024-10-12 13:24:00]
      assert speaker.end == ~N[2024-10-12 13:24:00]
      assert speaker.talk == "some updated talk"
      assert speaker.bio == %{}
    end

    test "update_speaker/2 with invalid data returns error changeset" do
      speaker = speaker_fixture()
      assert {:error, %Ecto.Changeset{}} = Speakers.update_speaker(speaker, @invalid_attrs)
      assert speaker == Speakers.get_speaker!(speaker.id)
    end

    test "delete_speaker/1 deletes the speaker" do
      speaker = speaker_fixture()
      assert {:ok, %Speaker{}} = Speakers.delete_speaker(speaker)
      assert_raise Ecto.NoResultsError, fn -> Speakers.get_speaker!(speaker.id) end
    end

    test "change_speaker/1 returns a speaker changeset" do
      speaker = speaker_fixture()
      assert %Ecto.Changeset{} = Speakers.change_speaker(speaker)
    end
  end
end
