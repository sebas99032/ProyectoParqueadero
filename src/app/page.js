"use client"

import React, { useEffect, useState } from 'react';
import CarView from "@/app/componets/carView";
import 'bootstrap/dist/css/bootstrap.css'
import ParkingLines from "@/app/componets/parkingLines";
import Clock from "@/app/componets/clock";
import ParkingTimer from "@/app/componets/parkingTimer";
import Logo_smart from "@/app/componets/logo_smart";
import Distance from "@/app/componets/distance";
import ParkingLine from "@/app/componets/parkingLine";

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8765');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const jsonData = JSON.parse(event.data);
      setData(jsonData);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
      <main className="container-fluid vh-100">
        <div className='row'>
          <aside className='col-2 container-fluid bg-white vh-100'>
            <div className="">
              <div className='row'>
                <Logo_smart/>
              </div>
              <div className='row'>
                <Clock />
              </div>
              <div className='row'>
                <ParkingTimer distance={data.distancia} />
              </div>
              <div className='row'>
                <Distance distance={data.distancia} />
              </div>
              <div className='row'>
                <ParkingLine led={data.infrarrojo_a} distance={data.distancia} direction={'Izquierda'}/>
              </div>
              <div className='row'>
                <ParkingLine led={data.infrarrojo_b} distance={data.distancia} direction={'Derecha'}/>
              </div>
            </div>
          </aside>
          <div className='col-10 bg-dark vh-100 center_parking'>
            <ParkingLines distance={data.distancia} led={data.infrarrojo_b}/>
            <CarView distance={data.distancia} setDistance={setData}/>
            <ParkingLines distance={data.distancia} led={data.infrarrojo_a}/>
          </div>
        </div>
      </main>
  );
};

export default App;
