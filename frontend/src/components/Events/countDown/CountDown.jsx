import React, { useEffect, useState } from 'react';

function CountDown({ start, end }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const difference = new Date(end.slice(0, 10)) - new Date();

    if (difference <= 0) {
      // If the difference is not greater than 0, return all zeros
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  }

  const timeComponent = Object.keys(timeLeft).map((interval, index) => (
    <span className='text-[25px] text-[#475ad2]' key={index}>
      {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}{interval}{" "}
    </span>
  ));

  return (
    <div className='w-full'>
      {timeComponent.every((value) => value.props.children.startsWith('00')) ? (
        <span className='text-[red] text-[25px]'>Time is up</span>
      ) : (
        timeComponent
      )}
    </div>
  );
}

export default CountDown;
