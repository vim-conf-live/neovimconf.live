import { useState, useEffect } from 'react';
import {BsTwitch} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import Link from 'next/link';

const Countdown = () => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [evenStarted, setEventStarted] = useState(false);

  const calcCountdown = () => {
    const countDate = new Date('Dec 09 2022 17:00:00 UTC-05:00').getTime();
    const now = new Date().getTime();

    const gap = countDate - now;

    if (gap <= 0) {
      setEventStarted(true);
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day).toString();
    const textHour = Math.floor((gap % day) / hour).toString();
    const textMinute = Math.floor((gap % hour) / minute).toString();
    const textSecond = Math.floor((gap % minute) / second).toString();

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
    <div className="flex gap-4 justify-center mt-2">
      <Link href="https://www.twitch.tv/theprimeagen" target="_blank">
          <a
            target="_blank"
            className={`flex content-start items-center gap-2 rounded-lg bg-brand-twitch py-3 px-4
                      text-sm font-bold  transition duration-300 hover:bg-[#8036dd] md:text-lg`}
          >
            
            <BsTwitch className="hidden text-4xl lg:inline" />
            Join stream{' '}
          </a>
        </Link>
       <Link href="https://www.youtube.com/@ThePrimeagen" target="_blank">
          <a
            target="_blank"
            className={`flex content-start items-center gap-2 rounded-lg bg-brand-youtube py-3 px-4
                      text-sm font-bold  transition duration-300 hover:bg-[#bf0c0c] md:text-lg`}
          >
            
            <BsYoutube className="hidden text-4xl lg:inline" />
            Watch now{' '}
          </a>
        </Link> 
    </div>
  );
};

export default Countdown;
