"use client"

import './style.css'
import logo from '../../../../public/parking_logo.svg';
import Image from "next/image";

export default function Logo_smart() {
    return(
        <div className='logo_div'>
            <Image className='logo' src={logo} alt="Slot" />
            <h2>
                SMART PARKING
            </h2>
        </div>
    )
}