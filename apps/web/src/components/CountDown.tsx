import { useEffect, useRef, type TimeHTMLAttributes } from "react";

const START_DATE = new Date('2023-12-08T10:00:00.000Z');

const segments = (now: Date, target = START_DATE) => {
  const millisecondsUntilTarget = START_DATE.getTime() - now.getTime();
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
      ref.current.innerText = segments(
      new Date()).map((segment) => segment.toString().padStart(2, '0')).join(':');
    }, 8)

    return () => clearInterval(interval)
  }, [ref.current])

  return (
    <time ref={ref} className={className}>99:99:99:99:99</time>
  )
}
