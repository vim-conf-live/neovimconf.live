defmodule Mix.Tasks.Nvc.ImportUsers do
  use Mix.Task
  alias Nvc.Accounts.User
  alias Nvc.Repo

  def run(filename) do
    File.stream!(filename)
    |> Stream.map(&String.trim/1)
    |> Stream.chunk_every(100)
    |> Stream.each(&insert_subscribers/1)
    |> Stream.run()
  end

  defp insert_subscribers(emails) do

    Repo.transaction(fn ->
      emails
      |> Enum.map(fn email ->
        %User{}
        |> User.import_changeset(%{email: email, source: :import})
        |> Repo.insert(on_conflict: :nothing)
      end)
    end)

    # YourApp.Repo.insert_all(
    #   YourApp.Subscriber,
    #   entries,
    #   on_conflict: :nothing  # Skip existing emails
    # )
  end
end
