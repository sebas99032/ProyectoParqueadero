import './style.css';
import car from '../../../../public/car.png';
import slot from '../../../../public/parking-svgrepo-com.svg';
import Image from "next/image";

export default function CarView({ distance }) {
    const divStyle = {
        transform: `translateY(${distance * 10}px)`,
        transition: 'transform 0.2s ease-out'
    }

    return (
        <>
            <div className="movable-div" style={divStyle}>
                {distance === 0 ? (
                    <Image className="sprite_b" src={slot} alt="Slot" />
                ) : (
                    <Image className="sprite" src={car} alt="V8" />
                )}
            </div>
        </>
    );
}
