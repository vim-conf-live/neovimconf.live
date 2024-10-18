defmodule NvcWeb.PageController do
  use NvcWeb, :controller

  def home(conn, _params) do
    render(conn, :home,
      sponsors: Nvc.Sponsors.list_sponsors(),
      agenda_items: Nvc.Agenda.list_agenda_items(),
      speakers: Nvc.Speakers.list_speakers()
    )
  end

  def privacy(conn, _params), do:
    render(conn, :privacy)

  def coc(conn, _params), do:
    render(conn, :coc)
end
