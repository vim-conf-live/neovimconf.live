defmodule NvcWeb.SpeakerHTML do
  alias Nvc.Speakers
  use NvcWeb, :html
  alias Speakers

  embed_templates "speaker_html/*"

  @doc """
  Renders a speaker form.
  """
  attr :changeset, Ecto.Changeset, required: true
  attr :action, :string, required: true

  def speaker_form(assigns)
end
