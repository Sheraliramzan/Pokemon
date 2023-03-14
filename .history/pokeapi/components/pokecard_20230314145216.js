import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isImageCentered, setIsImageCentered] = useState(false);

  const handleCardClick = () => {
    setIsImageCentered(true);
    setTimeout(() => {
      setIsImageCentered(false);
    }, 2000); // wait for 2 seconds before hiding the image
  };

  return (
    <motion.div
      className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleCardClick}
    >
      <div className="relative pb-1/2">
        <motion.img
          className="absolute h-full w-full object-cover"
          src={image}
          alt={name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="px-4 py-3">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base mb-2">Status: {status}</p>
        <p className="text-gray-700 text-base mb-2">Evolution: {evolution}</p>
        <p className="text-gray-700 text-base mb-2">Caught: {caught}</p>
        <p className="text-gray-700 text-base mb-2">Location: {location}</p>
      </div>
      <AnimatePresence>
        {isImageCentered && (
          <motion.div
            key="centered-image"
            className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="max-w-3xl max-h-3xl"
              src={image2}
              alt={name}
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}








