import Head from 'next/head'
import Image from 'next/image'
import AshCard from '../components/AshCard'
import PokeCard from '../components/PokeCard'
import PokeInfoCard from '../components/InfoCard'
import ashs from '../../data/ashspokemon.json'

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
        <div>
          <div>
          <div className="w-full max-w-sm rounded-lg shadow-md overflow-hidden">
              <AshCard 
                className="bg-white p-4 rounded-lg"
                nameClassName="text-lg font-semibold"
                imageClassName="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            {ashs.map((ash, index) => {
              return (
                
                <div key={index}>
                  <PokeCard
                    image2={ash.Image2}
                    name={ash.Name}
                    image={ash.Image}
                
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
