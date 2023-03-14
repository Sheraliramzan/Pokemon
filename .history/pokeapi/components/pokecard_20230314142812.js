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
      className="w-full rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="flex">
        <motion.img
          className="w-32 mx-auto"
          src={image2}
          alt={name}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
        <h2 className="text-center font-bold text-2xl mt-11">{name}</h2>
        <motion.img
          className="w-32 mx-auto"
          src={image}
          alt={name}
          whileHover={{ rotate: -360 }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        className="px-4 py-2 justify-center text-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <p className="font-medium text-white">Status: {status}</p>
        <p className="font-medium text-white">Evolution: {evolution}</p>
        <p className="font-medium text-white">Caught: {caught}</p>
        <p className="font-medium text-white">Location: {location}</p>
      </motion.div>
    </motion.div>
  );
}









