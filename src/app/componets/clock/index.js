'use client'
import {useEffect, useState} from "react";
import clock from '../../../../public/clock-svgrepo-com.svg';
import slot from "../../../../public/parking-svgrepo-com.svg";
import Image from "next/image";
import './style.css'

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className='clock_div'>
      <Image className="clock" src={clock} alt="Slot" />
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}