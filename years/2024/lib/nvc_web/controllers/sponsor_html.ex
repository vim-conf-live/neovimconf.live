defmodule NvcWeb.SponsorHTML do
  use NvcWeb, :html

  embed_templates "sponsor_html/*"

  @doc """
  Renders a sponsor form.
  """
  attr :changeset, Ecto.Changeset, required: true
  attr :action, :string, required: true

  def sponsor_form(assigns)
end
