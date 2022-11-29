import agenda2022 from 'utils/agenda-2022.json';
import DayTable from 'components/DayTable';
import Link from 'next/link';
import { HiOutlineCalendar } from 'react-icons/hi';

const AgendaSection = () => {
  const dayTables = agenda2022.map((day) => (
    <DayTable key={day.date} {...day} />
  ));

  return (
    <section className="w-full">
      <h2 className="sm:mb-4">Agenda</h2>
      <Link
        href="https://calendar.google.com/calendar/ical/c_pmamnjmfa6b2ii3v1ei1te5mm4%40group.calendar.google.com/public/basic.ics"
        target="_blank"
      >
        <a
          className={`inline-flex content-start my-12 mx-auto items-center gap-2 rounded-lg 
                    bg-[#0f74d0] hover:bg-[#0447BF] duration-300 py-3 px-4
                    text-sm transition md:text-base`}
        >
          <HiOutlineCalendar />
          <span>Add to your Calendar</span>
        </a>
      </Link>
    </section>
  );
};
      // {dayTables}

export default AgendaSection;
