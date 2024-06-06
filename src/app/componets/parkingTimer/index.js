import React, { useState, useEffect } from 'react';
import './style.css'
import clock from '../../../../public/parking-meter-svgrepo-com.svg';
import park from '../../../../public/parking-car-parking-svgrepo-com.svg';
import park_ from '../../../../public/parking-car-svgrepo-com.svg';
import Image from "next/image";

function ParkingTimer({ distance }) {
  const [arrivalTime, setArrivalTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);

  useEffect(() => {
    if (distance > 0 && !arrivalTime) {
      setArrivalTime(new Date());
    } else if (distance === 0 && arrivalTime) {
      setArrivalTime(null);
      setElapsedTime(null);
    }
  }, [distance, arrivalTime]);

  useEffect(() => {
    let timerID;
    if (arrivalTime) {
      timerID = setInterval(() => updateElapsedTime(), 1000);
    }

    return () => {
      if (timerID) {
        clearInterval(timerID);
      }
    };
  }, [arrivalTime]);

  const updateElapsedTime = () => {
    if (arrivalTime) {
      const now = new Date();
      const elapsed = new Date(now - arrivalTime);
      setElapsedTime(elapsed);
    }
  };

  const formatTime = (time) => {
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {arrivalTime && (
        <>
            <div className="parkingTime_div">
                <Image className="parking_icon" src={park_} alt="Slot" />
                <h2>Hora de llegada: {arrivalTime.toLocaleTimeString()}</h2>
            </div>
            {elapsedTime && (
                <div className="parkingTime_div">
                    <Image className="parking_icon" src={clock} alt="Slot" />
                    <h2>Tiempo estacionado: {formatTime(elapsedTime)}</h2>
                </div>
            )}
        </>
      )}
        {distance === 0 &&
          <div className="parkingTime_div">
              <Image className="parking_icon" src={park} alt="Slot" />
              <h2>Plaza de parqueo disponible.</h2>
          </div>
      }
    </div>
  );
}

export default ParkingTimer;
