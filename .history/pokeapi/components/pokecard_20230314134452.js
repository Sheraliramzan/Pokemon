import styles from '../styles/Card.module.css';
import "tailwindcss/tailwind.css";

export default function PokeCard({
  name,
  image,
  image2,
  status,
  evolution,
  caught,
  location
}) {
  return (
    <div className="w-full rounded-lg shadow-md overflow-hidden">
      <img className="w-32 mx-auto" src={image2} alt={name} />
      <h2 className="text-center font-bold text-2xl my-2">{name}</h2>
      <img className="w-32 mx-auto" src={image} alt={name} />
      <div className="px-4 py-2">
        <p className="font-medium text-white">Status: {status}</p>
        <p className="font-medium text-white">Evolution: {evolution}</p>
        <p className="font-medium text-white">Caught: {caught}</p>
        <p className="font-medium text-gray-600">Location: {location}</p>
      </div>
    </div>
  );
}









