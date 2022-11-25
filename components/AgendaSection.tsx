import agenda2022 from 'utils/agenda-2022.json';
import DayTable from 'components/DayTable';

const AgendaSection = () => {
  const dayTables = agenda2022.map(day => <DayTable {...day} />);

  return (
    <section className="w-full">
      <h2 className="sm:mb-4">Agenda</h2>
      {dayTables}
    </section>
  );
};

export default AgendaSection;
