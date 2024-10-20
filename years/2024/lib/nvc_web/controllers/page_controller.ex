defmodule NvcWeb.PageController do
  alias Nvc.Accounts.User
  use NvcWeb, :controller
  alias Nvc.Speakers
  alias Nvc.Accounts

  def home(conn, _params) do
    render(conn, :home,
      changeset: Nvc.Accounts.change_user_registration(%User{}),
      justin: Speakers.get_speaker_by_handle!("justinmk"),
      keynote: Nvc.Speakers.list_speakers(:keynote),
      mcs: Nvc.Speakers.list_speakers(:mc),
      sponsors: Nvc.Sponsors.list_sponsors(),
      agenda_items: Nvc.Agenda.list_agenda_items(),
      speakers: Nvc.Speakers.list_speakers(:public_speakers)
    )
  end

  def privacy(conn, _params), do:
    render(conn, :privacy)

  def coc(conn, _params), do:
    render(conn, :coc)
end
