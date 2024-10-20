defmodule Nvc.Speakers do
  @moduledoc """
  The Speakers context.
  """

  import Ecto.Query, warn: false
  alias Nvc.Repo

  alias Nvc.Speakers.Speaker

  @doc """
  Returns the list of speakers.

  ## Examples

      iex> list_speakers()
      [%Speaker{}, ...]

  """
  def list_speakers(type \\ :speaker)
  def list_speakers(:all) do
    q = from s in Speaker
    q
    |> Repo.all()
  end

  def list_speakers(:public_speakers) do
    q =
      from s in Speaker,
        where: s.type == :speaker,
        where: s.public == true

    q
    |> Repo.all()
  end

  def list_speakers(type) do
    q =
      from s in Speaker,
        where: s.type == ^type
    q
    |> Repo.all()
  end


  @doc """
  Gets a single speaker.

  Raises `Ecto.NoResultsError` if the Speaker does not exist.

  ## Examples

      iex> get_speaker!(123)
      %Speaker{}

      iex> get_speaker!(456)
      ** (Ecto.NoResultsError)

  """
  def get_speaker!(id), do: Repo.get!(Speaker, id)

  def get_speaker_by_handle!(handle) do
    query =
      from s in Speaker,
        where: s.handle == ^handle,
        preload: :talks

    query
    |> Repo.one()
  end

  @doc """
  Creates a speaker.

  ## Examples

      iex> create_speaker(%{field: value})
      {:ok, %Speaker{}}

      iex> create_speaker(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_speaker(attrs \\ %{}) do
    %Speaker{}
    |> Speaker.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a speaker.

  ## Examples

      iex> update_speaker(speaker, %{field: new_value})
      {:ok, %Speaker{}}

      iex> update_speaker(speaker, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_speaker(%Speaker{} = speaker, attrs) do
    speaker
    |> Speaker.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a speaker.

  ## Examples

      iex> delete_speaker(speaker)
      {:ok, %Speaker{}}

      iex> delete_speaker(speaker)
      {:error, %Ecto.Changeset{}}

  """
  def delete_speaker(%Speaker{} = speaker) do
    Repo.delete(speaker)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking speaker changes.

  ## Examples

      iex> change_speaker(speaker)
      %Ecto.Changeset{data: %Speaker{}}

  """
  def change_speaker(%Speaker{} = speaker, attrs \\ %{}) do
    Speaker.changeset(speaker, attrs)
  end

  def save_photo!(%Plug.Upload{} = photo, %Speaker{} = speaker) do
    filename = "#{speaker.id}#{Path.extname(photo.filename)}"

    photo
    |> Nvc.Storage.upload("speakers/#{filename}")

    {:ok, _} = update_speaker(speaker, %{"photo" => filename})
  end

  def photo_url(%Speaker{photo: nil, handle: handle}) do
    "https://placehold.co/600x400?text=#{handle}"
  end

  def photo_url(%Speaker{photo: photo, id: id}) do
    Nvc.Storage.public_url("speakers/#{id}#{Path.extname(photo)}")
  end

  def social_links(%Speaker{socials: socials}) when is_binary(socials) do
    socials
    |> String.trim()
    |> String.split("\n")
    |> Enum.map(fn link ->
      {link, URI.parse(link)}
    end)
  end

  def social_links(_), do: []
end
