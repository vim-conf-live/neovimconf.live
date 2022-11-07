import {useState, useEffect} from 'react';

const Countdown = () => {
	const [days, setDays] = useState();
	const [hours, setHours] = useState();
	const [minutes, setMinutes] = useState();
	const [seconds, setSeconds] = useState();

	const calcCountdown = () => {
		const countDate = new Date("Dec 9, 2022 00:00:00").getTime()
		const now = new Date().getTime();
		const gap = countDate - now;

		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;

		const textDay = Math.floor(gap / day);
		const textHour = Math.floor((gap % day) / hour);
		const textMinute = Math.floor((gap % hour) / minute);
		const textSecond = Math.floor((gap % minute) / second);

		// document.querySelector(".day").innerText =  textDay;
		// document.querySelector(".hour").innerText =  textHour;
		// document.querySelector(".minute").innerText =  textMinute;
		// document.querySelector(".second").innerText =  textSecond;

		setDays(textDay);
		setHours(textHour);
		setMinutes(textMinute);
		setSeconds(textSecond);

	}


	useEffect(() => {

      setInterval(calcCountdown, 1000);

	}, []);
	



	return (

		<section className="Countdown">

		<div className="container-day">
		<h3 className="day">{days}</h3>
		<h3>day</h3>
	    </div>

	    <div className="container-hour">
		<h3 className="hour">{hours}</h3>
		<h3>hour</h3>
	    </div>

	    <div className="container-minute">
		<h3 className="minute">{minutes}</h3>
		<h3>minute</h3>
	    </div>

	    <div className="container-second">
		<h3 className="second">{seconds}</h3>
		<h3>second</h3>
	    </div>		

		</section>


		);
};

export default Countdown;