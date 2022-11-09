import { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [evenStarted, setEventStarted] = useState(false);

  const calcCountdown = () => {
    const countDate = new Date('dec 09, 2022 17:00:00 UTC:-5:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap <= 0) {
      setEventStarted(true);
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    setDays(textDay);
    setHours(textHour);
    setMinutes(textMinute);
    setSeconds(textSecond);
  };

  useEffect(() => {
    setInterval(calcCountdown, 1000);
  }, []);

  return !evenStarted ? (
    <div className="Countdown mb-6 sm:m-0">
      <div className="container-day">
        <h3 className="day">{days}</h3>
        <h3>Days</h3>
      </div>

      <div className="container-hour">
        <h3 className="hour">{hours}</h3>
        <h3>Hours</h3>
      </div>

      <div className="container-minute">
        <h3 className="minute">{minutes}</h3>
        <h3>Minutes</h3>
      </div>

      <div className="container-second">
        <h3 className="second">{seconds}</h3>
        <h3>Seconds</h3>
      </div>
    </div>
  ) : (
    <h1>The event has started</h1>
  );
};

export default Countdown;
