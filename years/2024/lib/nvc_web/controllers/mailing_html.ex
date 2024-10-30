defmodule NvcWeb.MailingHTML do
  use NvcWeb, :html

  embed_templates "mailing_html/*"

  @doc """
  Renders a mailing form.
  """
  attr :changeset, Ecto.Changeset, required: true
  attr :action, :string, required: true

  def mailing_form(assigns)
end
