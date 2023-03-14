import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

function CenteredImage({ imageSrc, onClose }) {
  return (
    <motion.div
      key="centered-image"
      className="fixed inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.img
        className="max-h-full max-w-full p-4"
        src={imageSrc}
        alt=""
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.2 }}
        transition={{ duration: 0.5 }}
        onClick={onClose}
      />
    </motion.div>
  );
}

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
  };

  const handleImageClose = () => {
    setIsImageCentered(false);
  };

  return (
    <>
      <motion.div
        className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCardClick}
      >
        <AnimatePresence>
          {isImageCentered && (
            <CenteredImage imageSrc={image} onClose={handleImageClose} />
          )}
        </AnimatePresence>
        <div className="relative pb-1/2">
          <motion.img
            className="absolute h-full w-full object-cover"
            src={image2}
            alt={name}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="px-4 py-3">
          <h2 className="font-bold text-xl mb-2">{name}</h2>
          <p className="text-gray-700 text-base mb-2">Status: {status}</p>
          <p className="text-gray-700 text-base mb-2">
            Evolution: {evolution}
          </p>
          <p className="text-gray-700 text-base mb-2">Caught: {caught}</p>
          <p className="text-gray-700 text-base mb-2">Location: {location}</p>
        </div>
        <motion.img
          className="absolute bottom-0 left-0 h-16 w-16 rounded-full bg-gray-100"
          src={image}
          alt={name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </>
  );
}






