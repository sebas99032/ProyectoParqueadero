import './style.css';

export default function ParkingLines({ distance, led }) {
  return (
    <div className={`lines ${
      led === 0 ? 'red-shadow' :
      (distance > 0 && led === 1 ? 'green-shadow' : '')
    } ${distance === 0 && led === 1 ? 'no-shadow' : ''}`}>
      {/* Contenido del componente */}
    </div>
  );
}
