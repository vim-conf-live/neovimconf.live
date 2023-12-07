import { useEffect, useRef, type TimeHTMLAttributes } from "react";

const START_DATE = new Date('2023-12-08T15:30:00.000Z');

const msLeft = (now: Date, target = START_DATE) => {
  return START_DATE.getTime() - now.getTime();
}

const createSegments = (millisecondsUntilTarget: number) => {
  const secondsUntilTarget = Math.floor(millisecondsUntilTarget / 1000);
  return [
    Math.floor(secondsUntilTarget / 86400),
    Math.floor(secondsUntilTarget / 3600) % 24,
    Math.floor(secondsUntilTarget / 60) % 60,
    Math.floor(secondsUntilTarget % 60),
    Math.floor(millisecondsUntilTarget % 1000 / 10)
  ];
}

export const CountDown: React.FC<TimeHTMLAttributes<never>> = ({className}) => {
  const ref = useRef<HTMLTimeElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!ref.current) return;
      const timeLeft = msLeft(new Date)
      const segments = createSegments(timeLeft);
      if (timeLeft <= 0) {
        ref.current.innerHTML = `<a href="https://www.twitch.tv/theprimeagen" class="bg-purple-500 text-white py-1 px-2 rounded">LIVE ON TWITCH!</a>`;
        return clearInterval(interval);
      }
      ref.current.innerText = segments.map((segment) => segment.toString().padStart(2, '0')).join(':');
    }, 10)

    return () => clearInterval(interval)
  }, [ref.current])

  return (
    <time ref={ref} className={className}>99:99:99:99:99</time>
  )
}
