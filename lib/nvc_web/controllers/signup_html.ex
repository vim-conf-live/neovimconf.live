defmodule NvcWeb.SignupHTML do
  use NvcWeb, :html

  embed_templates "signup_html/*"

  @doc """
  Renders the signup form.
  """
  attr :changeset, Ecto.Changeset, required: true
  attr :action, :string, required: true

  def signup_form(assigns)

  @random_placeholder_emails [
    "hunter2@crowdsnipe.tld",
    "hjkl@jkwqhelp.tld",
    "skillissues@vscode.tld",
    "grug@complexitybad.tld",
    "rawdog@ed4life.tld",
    "tpope@thegoat.tld",
    "pinky@nomoreemacs.tld",
    "falcor@neverforget.tld",
    "10xdev@localitdept.tld"
  ]

  def get_placeholder, do: Enum.random(@random_placeholder_emails)

  def speaker_callout(assigns), do: ~H"""
      <aside class="callout appear ml-auto mt-auto mb-4">
        <header><h2>Become a speaker!</h2></header>
        <section>
          <p>Show off your neovim wisdom in front of an audience in up to 10 or 30 minutes.</p>
          <p class="sm:text-right">
            <span class="hidden dark:block text-muted text-sm dark:sm:inline">Warning: flashbang</span>
            <a href="https://noteforms.com/forms/neovimconf-2024-talk-submission-7l3mhi">
              Submit your proposal! →
            </a> 
          </p>
        </section>
      </aside>
    """

end
