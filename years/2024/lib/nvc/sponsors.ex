defmodule Nvc.Sponsors do
  @moduledoc """
  The Sponsors context.
  """

  import Ecto.Query, warn: false
  alias Nvc.Repo

  alias Nvc.Sponsors.Sponsor

  @doc """
  Returns the list of sponsors.

  ## Examples

      iex> list_sponsors()
      [%Sponsor{}, ...]

  """
  def list_sponsors do
    Repo.all(Sponsor)
  end

  @doc """
  Gets a single sponsor.

  Raises `Ecto.NoResultsError` if the Sponsor does not exist.

  ## Examples

      iex> get_sponsor!(123)
      %Sponsor{}

      iex> get_sponsor!(456)
      ** (Ecto.NoResultsError)

  """
  def get_sponsor!(id), do: Repo.get!(Sponsor, id)

  @doc """
  Creates a sponsor.

  ## Examples

      iex> create_sponsor(%{field: value})
      {:ok, %Sponsor{}}

      iex> create_sponsor(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_sponsor(attrs \\ %{}) do
    %Sponsor{}
    |> Sponsor.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a sponsor.

  ## Examples

      iex> update_sponsor(sponsor, %{field: new_value})
      {:ok, %Sponsor{}}

      iex> update_sponsor(sponsor, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_sponsor(%Sponsor{} = sponsor, attrs) do
    sponsor
    |> Sponsor.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a sponsor.

  ## Examples

      iex> delete_sponsor(sponsor)
      {:ok, %Sponsor{}}

      iex> delete_sponsor(sponsor)
      {:error, %Ecto.Changeset{}}

  """
  def delete_sponsor(%Sponsor{} = sponsor) do
    Repo.delete(sponsor)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking sponsor changes.

  ## Examples

      iex> change_sponsor(sponsor)
      %Ecto.Changeset{data: %Sponsor{}}

  """
  def change_sponsor(%Sponsor{} = sponsor, attrs \\ %{}) do
    Sponsor.changeset(sponsor, attrs)
  end

  def image_url(%Sponsor{image: nil, name: name}) do
    "https://placehold.co/600x400?text=#{name}"
  end

  def image_url(%Sponsor{image: image, id: id}) do
    Nvc.Storage.public_url("sponsors/#{id}#{Path.extname(image)}")
  end

  def save_image!(%Plug.Upload{} = image, %Sponsor{} = sponsor) do
    filename = "#{sponsor.id}#{Path.extname(image.filename)}"

    image
    |> Nvc.Storage.upload("sponsors/#{filename}")

    {:ok, _} = update_sponsor(sponsor, %{"image" => filename})
  end
end
