import Image from "next/image";
import red from "../../../../public/red-triangle-pointed-up-svgrepo-com.svg";
import ward from "../../../../public/warning-svgrepo-com.svg";
import green from "../../../../public/green-circle-svgrepo-com.svg";
import React from "react";
import './style.css'

export default function ParkingLine({led, distance, direction}) {

    if (led === 0 && distance === 0) {
           return(
                <div className='parking_line_div'>
                    <Image className="parking_line_logo" src={red} alt="Slot"/>
                    <h3>Hay una invacion en la linea {direction}</h3>
                </div>
        )
    }

    if (led === 0 && distance > 0 ) {
           return(
                <div className='parking_line_div'>
                    <Image className="parking_line_logo" src={ward} alt="Slot"/>
                    <h3>El vehiculo se encuentra sobre la linea {direction}</h3>
                </div>
        )
    }

    if (led === 1 && distance > 0 ) {
           return(
                <div className='parking_line_div'>
                    <Image className="parking_line_logo" src={green} alt="Slot"/>
                    <h3>El vehiculo se dentro de la linea {direction}</h3>
                </div>
        )
    }

}