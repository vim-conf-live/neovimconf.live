defmodule Nvc.Agenda do
  @moduledoc """
  The Agenda context.
  """

  import Ecto.Query, warn: false
  alias Nvc.Repo

  alias Nvc.Agenda.Item

  @doc """
  Returns the list of agenda_items.

  ## Examples

      iex> list_agenda_items()
      [%Item{}, ...]

  """
  def list_agenda_items do
    Item
    |> preload(:speaker)
    |> order_by(asc: :position)
    |> Repo.all()
  end

  @doc """
  Gets a single item.

  Raises `Ecto.NoResultsError` if the Item does not exist.

  ## Examples

      iex> get_item!(123)
      %Item{}

      iex> get_item!(456)
      ** (Ecto.NoResultsError)

  """
  def get_item!(id) do
    query =
      from i in Item,
        where: i.id == ^id,
        preload: :speaker

    query
    |> Repo.one!()
  end

  @doc """
  Creates a item.

  ## Examples

      iex> create_item(%{field: value})
      {:ok, %Item{}}

      iex> create_item(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_item(attrs \\ %{}) do
    %Item{}
    |> Item.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a item.

  ## Examples

      iex> update_item(item, %{field: new_value})
      {:ok, %Item{}}

      iex> update_item(item, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_item(%Item{} = item, attrs) do
    item
    |> Item.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a item.

  ## Examples

      iex> delete_item(item)
      {:ok, %Item{}}

      iex> delete_item(item)
      {:error, %Ecto.Changeset{}}

  """
  def delete_item(%Item{} = item) do
    Repo.delete(item)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking item changes.

  ## Examples

      iex> change_item(item)
      %Ecto.Changeset{data: %Item{}}

  """
  def change_item(%Item{} = item, attrs \\ %{}) do
    Item.changeset(item, attrs)
  end

  def calculate_start_times(items, %NaiveDateTime{} = start_time) do
    {_end_time, items} =
      items
      |> Enum.reduce(
        {start_time, []},
        fn %Item{} = item, {start_time, prev_slots} ->
          slot = {start_time, item}
          {NaiveDateTime.add(start_time, round(item.duration), :minute), prev_slots ++ [slot]}
        end
      )

    items
  end
end
