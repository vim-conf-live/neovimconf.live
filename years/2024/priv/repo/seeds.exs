# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Nvc.Repo.insert!(%Nvc.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

%Nvc.Accounts.User{
  email: "admin@example.com",
  role: :admin
}
|> Nvc.Repo.insert!()
