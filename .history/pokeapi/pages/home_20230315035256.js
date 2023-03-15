import Head from 'next/head'
import PokeCard from '../components/PokeCard'
import ashs from '../data/ashspokemon.json'
import AshCard
import { motion } from 'framer-motion'

export default function Home() {
  console.log(ashs);
  return (
    <>
      <Head>
        <title>Ash Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Pikachu.png" />
      </Head>
      <main className="bg-gray-200 bg-fixed bg-no-repeat bg-center min-h-screen" style={{ backgroundImage:"url('pikachu running.gif')" }}>
        <div>
        </div>
        
        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mt-4">
            {ashs.map((ashs, index) => {
              return (
                
                <div key={index} className="flex justify-center cursor-pointer text-white">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-full rounded-lg shadow-md overflow-hidden"
                  >
                    <PokeCard
                      image2={ashs.Image2}
                      name={ashs.Name}
                      image={ashs.Image}
                      status={ashs.status}
                      evolution={ashs.evolution}
                      caught={ashs.caught}
                      location={ashs.location}
                    />
                    
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  );
}