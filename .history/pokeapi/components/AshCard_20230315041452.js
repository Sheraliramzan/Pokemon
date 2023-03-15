import { motion } from 'framer-motion';
import "tailwindcss/tailwind.css";

export default function AshCard({
  image2,
}) {

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const imgVariants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: ,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-gray-800 overflow-hidden">
        <motion.div className='flex justify-center'
          variants={imgVariants}
        >
          <img className="w-32 mx-auto" src={"/Pikachu.png"} alt="Pikachu"/>
          <h2 className="text-white text-3xl font-bold ml-4 mt-10"
            variants={titleVariants}
          >
            Ash's Pokemons
          </h2>
          <img className="w-32 mx-auto" src={"/Charizard.png"} alt="Charizard"/>
        </motion.div>
      </div>
    </motion.div>
  );
}
