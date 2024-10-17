defmodule NvcWeb.PageController do
  use NvcWeb, :controller

  def privacy(conn, _params), do:
    render(conn, :privacy)

  def coc(conn, _params), do:
    render(conn, :coc)
end
