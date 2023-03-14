import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

export default function PokeCard({
  name,
  image,
  image2,
  status,
  evolution,
  caught,
  location,
}) {
  return (
    <motion.div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative pb-3/4 sm:pb-1/2">
        <motion.img
          className="absolute h-full w-full object-cover"
          src={image2}
          alt={name}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="px-4 py-3">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base mb-2">Status: {status}</p>
        <p className="text-gray-700 text-base mb-2">Evolution: {evolution}</p>
        <p className="text-gray-700 text-base mb-2">Caught: {caught}</p>
        <p className="text-gray-700 text-base mb-2">Location: {location}</p>
      </div>
      <motion.img
        className="absolute bottom-0 left-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-100"
        src={image}
        alt={name}
        whileHover={{ rotate: -360 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}









