defmodule Nvc.Broadcasts.MailingWorker do
  use Oban.Worker, queue: :mailer
  import Swoosh.Email

  require Logger
  alias Nvc.Mailer

  @impl Oban.Worker
  def perform(%Oban.Job{args: %{"email" => email, "subject" => subject, "body" => body}}) do
    email =
      new()
      |> to(email)
      |> from({"NeovimConf", Application.fetch_env!(:nvc, :confirm_email_from)})
      |> put_provider_option(:message_stream, "broadcast")
      |> subject(subject)
      |> text_body(body)

    with {:ok, _metadata} <- Mailer.deliver(email) do
      {:ok, email}
    end
  end
end
