const GoogleCalendar = () => {
  return (
    <div className="md:w-3/4 lg:w-1/2 mt-32 h-[1000px] w-full px-4 mx-auto">
      <h1 className="font-bold text-4xl text-gray-200 mb-8 text-center">Schedule</h1>
      <div className="relative w-full h-full bg-white rounded-lg">
        <style jsx>{`
          iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_pmamnjmfa6b2ii3v1ei1te5mm4%40group.calendar.google.com&mode=AGENDA&dates=20221209/20221210"
          style={{ border: 0, padding: '20px' }}
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleCalendar;
