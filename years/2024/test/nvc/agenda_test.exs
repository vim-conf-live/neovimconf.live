defmodule Nvc.AgendaTest do
  use Nvc.DataCase

  alias Nvc.Agenda

  describe "calculate_start_times" do
    test "calculates start time for each talk" do
      items = [
        %Nvc.Agenda.Item{duration: 15.5, title: "Talk 1"},
        %Nvc.Agenda.Item{duration: 30.5, title: "Talk 2"},
        %Nvc.Agenda.Item{duration: 45.5, title: "Talk 3"}
      ]

      result =[
        {~N[2024-11-19 10:00:00], items |> Enum.at(0)},
        {~N[2024-11-19 10:15:00], items |> Enum.at(1)},
        {~N[2024-11-19 10:45:00], items |> Enum.at(2)}
      ] 

      assert result = Agenda.calculate_start_times(items, ~N[2024-11-19 10:00:00])
    end
  end
end
