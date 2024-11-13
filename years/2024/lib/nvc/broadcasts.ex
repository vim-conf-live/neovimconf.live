defmodule Nvc.Broadcasts do
  @moduledoc """
  The Broadcasts context.
  """

  import Ecto.Query, warn: false
  alias Nvc.Repo

  alias Nvc.Broadcasts
  alias Nvc.Broadcasts.Mailing
  alias Nvc.Accounts.User

  @doc """
  Returns the list of mailings.

  ## Examples

      iex> list_mailings()
      [%Mailing{}, ...]

  """
  def list_mailings do
    Repo.all(Mailing)
  end

  @doc """
  Gets a single mailing.

  Raises `Ecto.NoResultsError` if the Mailing does not exist.

  ## Examples

      iex> get_mailing!(123)
      %Mailing{}

      iex> get_mailing!(456)
      ** (Ecto.NoResultsError)

  """
  def get_mailing!(id), do: Repo.get!(Mailing, id)

  @doc """
  Creates a mailing.

  ## Examples

      iex> create_mailing(%{field: value})
      {:ok, %Mailing{}}

      iex> create_mailing(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_mailing(attrs \\ %{}) do
    %Mailing{}
    |> Mailing.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a mailing.

  ## Examples

      iex> update_mailing(mailing, %{field: new_value})
      {:ok, %Mailing{}}

      iex> update_mailing(mailing, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_mailing(%Mailing{} = mailing, attrs) do
    mailing
    |> Mailing.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a mailing.

  ## Examples

      iex> delete_mailing(mailing)
      {:ok, %Mailing{}}

      iex> delete_mailing(mailing)
      {:error, %Ecto.Changeset{}}

  """
  def delete_mailing(%Mailing{} = mailing) do
    Repo.delete(mailing)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking mailing changes.

  ## Examples

      iex> change_mailing(mailing)
      %Ecto.Changeset{data: %Mailing{}}

  """
  def change_mailing(%Mailing{} = mailing, attrs \\ %{}) do
    Mailing.changeset(mailing, attrs)
  end

  def launch_mailing!(%Mailing{} = mailing) do
    jobs =
      list_recipients()
      |> Enum.map(fn recip ->
        recip
        |> Map.take([:email])
        |> Enum.into(%{subject: mailing.subject, body: mailing.body})
        |> Broadcasts.MailingWorker.new()
      end)

    Repo.transaction(fn ->
      Enum.each(jobs, &Oban.insert!/1)

      mailing
      |> Ecto.Changeset.change(%{status: :sent})
      |> Repo.update!()
    end, timeout: :infinity)
  end

  def list_recipients() do
    from(u in User, 
      where: (not is_nil(u.confirmed_at)) or u.source == :import)
    |> Repo.all()
  end
end
