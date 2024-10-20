defmodule NvcWeb.PageHTML do
  use NvcWeb, :html
  import NvcWeb.Agenda.ItemHTML, only: [agenda_item_list: 1]
  import NvcWeb.SpeakerHTML, only: [speaker_list: 1]
  import NvcWeb.SponsorHTML, only: [sponsor_list: 1]

  embed_templates "page_html/*"
end
