defmodule NvcWeb.SpeakerController do
  use NvcWeb, :controller

  alias Nvc.Speakers
  alias Nvc.Speakers.Speaker

  def index(conn, _params) do
    speakers = Speakers.list_speakers()
    render(conn, :index, speakers: speakers)
  end

  def new(conn, _params) do
    changeset = Speakers.change_speaker(%Speaker{})
    render(conn, :new, changeset: changeset)
  end

  def create(conn, %{"speaker" => speaker_params, "photo_upload" => %Plug.Upload{} = photo}) do
    case Speakers.create_speaker(speaker_params) do
      {:ok, speaker} ->
        photo
        |> Speakers.save_photo!(speaker)

        conn
        |> put_flash(:info, "Speaker created successfully.")
        |> redirect(to: ~p"/speakers")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new, changeset: changeset)
    end
  end

  def show(conn, %{"id" => handle}) do
    speaker = Speakers.get_speaker_by_handle!(handle)

    speaker
    |> maybe_split_socials()

    render(conn, :show, speaker: speaker)
  end

  defp maybe_split_socials(%Speaker{socials: nil} = speaker), do: speaker

  defp maybe_split_socials(%Speaker{socials: socials} = speaker) when is_binary(socials) do
    speaker
    |> Map.update!(:socials, &String.split(&1, "\n"))
  end

  def edit(conn, %{"id" => handle}) do
    speaker = Speakers.get_speaker_by_handle!(handle)
    changeset = Speakers.change_speaker(speaker)
    render(conn, :edit, speaker: speaker, changeset: changeset)
  end

  def update(conn, %{"speaker" => speaker_params} = form_data) do
    speaker = Speakers.get_speaker!(speaker_params["id"])

    case Speakers.update_speaker(speaker, speaker_params) do
      {:ok, speaker} ->
        case form_data do
          %{"photo_upload" => %Plug.Upload{} = photo} ->
            photo |> Speakers.save_photo!(speaker)
          _ -> nil
        end

        conn
        |> put_flash(:info, "Speaker updated successfully.")
        |> redirect(to: ~p"/speakers")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :edit, speaker: speaker, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    speaker = Speakers.get_speaker!(id)
    {:ok, _speaker} = Speakers.delete_speaker(speaker)

    conn
    |> put_flash(:info, "Speaker deleted successfully.")
    |> redirect(to: ~p"/speakers")
  end

end
