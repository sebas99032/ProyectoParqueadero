import Image from "next/image";
import park_ from "../../../../public/distance.svg";
import React from "react";

export default function Distance({distance}) {


    return(
        <div className="parkingTime_div">
            <Image className="parking_icon" src={park_} alt="Slot"/>
            <h3>Distancia: {distance} cm</h3>
        </div>
    )
}