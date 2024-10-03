defmodule NvcWeb.AltchaController do
  use NvcWeb, :controller

  def index(conn, _params) do
    challenge = %Altcha.ChallengeOptions{
      hmac_key: Application.fetch_env!(:nvc, :hmac_key),
      max_number: 100_000
    }
    |> Altcha.create_challenge()

    render(conn, challenge: challenge)
  end
end
