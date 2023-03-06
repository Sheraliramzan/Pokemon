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
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200  bg-fixed bg-cover bg-center h-screen">
        <div className="container mx-auto py-6 px-4">
          <AshCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ashs.map((ash, index) => {
              return (
                <div key={index}>
                  <PokeCard
                    image2={ash.Image2}
                    name={ash.Name}
                    image={ash.Image}
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
