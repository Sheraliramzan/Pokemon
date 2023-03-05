import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'

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
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-4">Pokemon</h1>
          <div className="flex items-center mb-4">
            <input
              className="border border-gray-300 py-2 px-4 rounded-md mr-4 w-64"
              type="text"
              onChange={(event) => {
                setPoke(event.target.value)
              }}
            />
            <button
              onClick={pokeSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Pokemon Search
            </button>
          </div>
          <div className="text-center">
            {!choose ? (
              <h1 className="text-xl">Enter your Pokemon!!</h1>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-4">{PokeEl.name}</h1>
                <img src={PokeEl.img} alt={PokeEl.name} className="w-32 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Species: {PokeEl.species}</h3>
                <h3 className="text-lg font-bold mb-2">Type: {PokeEl.type}</h3>
                <h4 className="text-lg mb-2">Hp: {PokeEl.hp}</h4>
                <h4 className="text-lg mb-2">Attak: {PokeEl.attack}</h4>
                <h4 className="text-lg mb-2">Defense: {PokeEl.defense}</h4>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
