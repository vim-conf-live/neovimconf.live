defmodule Nvc.Accounts.UserNotifier do
  import Swoosh.Email

  require Logger
  alias Nvc.Mailer

  # Delivers the email using the application mailer.
  defp deliver(recipient, subject, body) do
    Logger.info("sending #{subject} to #{recipient}")

    email =
      new()
      |> to(recipient)
      |> from({"NeovimConf 2024", Application.fetch_env!(:nvc, :confirm_email_from)})
      |> subject(subject)
      |> text_body(body)

    with {:ok, _metadata} <- Mailer.deliver(email) do
      {:ok, email}
    end
  end

  def deliver_magic_link(user, url) do
    deliver(user.email, "Sign in to MagicLink", """
    ==============================
    Hi #{user.email},

    Please use this link to sign in:

    #{url}

    If you didn't request this email, feel free to ignore this.
    ==============================
    """)
  end

  @doc """
  Deliver instructions to confirm account.
  """
  def deliver_confirmation_instructions(user, url) do
    deliver(user.email, "Confirm your signup for NeovimConf 2024!", """
    Hello there!

    We really appreciate that you signed up for NeovimConf 2024! Open the
    following URL to complete your signup:

    #{url}

    We promise to only use your email address for announcements and things
    related to your account; you know - magic-links and such.

    If you have no idea what this is about and you didn't signup for any of
    this, you can safely ignore this email. Or if you just forgot it already,
    check https://neovimconf.live/

    We're stoked to see you in november; it's gonna be a whole lot of fun!

    Your team at NeovimConf.

    :x

    --
    https://neovimconf.live - Your favorite editor's conference
    """)
  end

  @doc """
  Deliver instructions to update a user email.
  """
  def deliver_update_email_instructions(user, url) do
    deliver(user.email, "Update email instructions", """

    ==============================

    Hi #{user.email},

    You can change your email by visiting the URL below:

    #{url}

    If you didn't request this change, please ignore this.

    ==============================
    """)
  end
end
