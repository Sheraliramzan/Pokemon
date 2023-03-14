import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [Poke, setPoke] = useState('')
  const [PokeEl, setPokeEl] = useState({
    name: '',
    species: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    type: '',
  })
  const [choose, setChoose] = useState(false)

  const pokeSearch = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Poke}`).then((response) => {
      setPokeEl({
        name: Poke,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
      })
      setChoose(true)
    })
  }

  return (
    <>
      <Head>
        <title>Pokemon Api</title>
        <meta name="description" content="This is a Pokemon Api Search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <div className="w-96 rounded-xl shadow-md overflow-hidden">
          <h1 className="text-4xl font-bold text-center py-4 bg-blue-600 text-white">
            Pokemon
          </h1>
          <div className="p-4 bg-white">
            <div className="flex items-center mb-4">
              <input
                className="rounded-lg border border-gray-300 py-2 px-3 mr-2 flex-1"
                type="text"
                placeholder="Enter a Pokemon name"
                onChange={(event) => setPoke(event.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={pokeSearch}
              >
                Search
              </button>
            </div>
            <div className="text-center">
              {!choose ? (
                <h1 className="text-2xl text-gray-500">Enter a Pokemon name</h1>
              ) : (
                <>
                  <h1 className="text-3xl font-bold mb-4">{PokeEl.name}</h1>
                  <div className="mb-4">
                    <Image
                      src={PokeEl.img}
                      alt={PokeEl.name}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Species:</p>
                    <p>{PokeEl.species}</p>
                    <p className="font-bold">Type:</p>
                    <p>{PokeEl.type}</p>
                    <p className="font-bold">HP:</p>
                    <p>{PokeEl.hp}</p>
                    <p className="font-bold">Attack:</p>
                    <p>{PokeEl.attack}</p>
                    <p className="font-bold">Defense:</p>
                    <p>{PokeEl.defense}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
