import Head from 'next/head'
import Image from 'next/image'
import AshCard from '../components/AshCard'
import PokeCard from '../components/PokeCard'
import ashs from '../data/ashspokemon.json'

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
      <main className="bg-gray-200 bg-fixed bg-center min-h-screen" style={{ backgroundImage:"url('pikachu running.gif')" }}>
        
        <div className="container mx-auto py-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mt-4">
            {ashs.map((ash, index) => {
              return (
                
                <div key={index} className="flex justify-center">
                  <PokeCard
                    image2={ash.Image2}
                    name={ash.Name}
                    image={ash.Image}
                    status={ash.Status}
                    evolution={ash.Evolution}
                    caught={ash.Caught}
                    location={ash.Location}
                    className="w-full rounded-lg shadow-md overflow-hidden"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
