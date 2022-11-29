import agenda2022 from 'utils/agenda-2022.json';
import DayTable from 'components/DayTable';

// https://calendar.google.com/calendar/ical/c_pmamnjmfa6b2ii3v1ei1te5mm4%40group.calendar.google.com/public/basic.ics
// <iframe src="https://calendar.google.com/calendar/embed?src=c_pmamnjmfa6b2ii3v1ei1te5mm4%40group.calendar.google.com&ctz=Europe%2FLondon" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
//
//https://calendar.google.com/calendar/embed?src=c_pmamnjmfa6b2ii3v1ei1te5mm4%40group.calendar.google.com&ctz=Europe%2FLondon

const AgendaSection = () => {
  const dayTables = agenda2022.map((day) => (
    <DayTable key={day.date} {...day} />
  ));

  return (
    <section className="w-full">
      <h2 className="sm:mb-4">Agenda</h2>
      {dayTables}
    </section>
  );
};

export default AgendaSection;
