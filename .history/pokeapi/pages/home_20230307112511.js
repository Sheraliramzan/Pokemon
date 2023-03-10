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
        <div className="container mx-auto">
          <AshCard />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {ashs.map((ash, index) => {
              return (
                <div key={index}>
                  <PokeCard
                    image2={ash.Image2}
                    name={ash.Name}
                    image={ash.Image}
                    className="bg-white rounded-lg shadow-lg p-4"
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