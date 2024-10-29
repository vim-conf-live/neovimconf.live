defmodule Nvc.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      NvcWeb.Telemetry,
      Nvc.Repo,
      {Ecto.Migrator,
        repos: Application.fetch_env!(:nvc, :ecto_repos),
        skip: skip_migrations?()},
      {DNSCluster, query: Application.get_env(:nvc, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Nvc.PubSub},
      {Oban, Application.fetch_env!(:nvc, Oban)},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Nvc.Finch},
      # Start a worker by calling: Nvc.Worker.start_link(arg)
      # {Nvc.Worker, arg},
      # Start to serve requests, typically the last entry
      NvcWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Nvc.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    NvcWeb.Endpoint.config_change(changed, removed)
    :ok
  end

  defp skip_migrations?() do
    # By default, sqlite migrations are run when using a release
    System.get_env("RELEASE_NAME") != nil
  end
end
