defmodule Nvc.Repo do
  use Ecto.Repo,
    otp_app: :nvc,
    adapter: Ecto.Adapters.Postgres
end
