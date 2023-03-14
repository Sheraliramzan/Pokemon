import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {

    const[Poke, setPoke]=useState('');
    const [PokeEl, setPokeEl]= useState({
      name:"", 
      species:"", 
      img: "",
      hp: "",
      attack: "",
      defense: "",
      type: ""
    });
    const [choose,setChoose ] = useState(false);

    const pokeSearch = () =>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${Poke}`).then((response)=>{
        setPokeEl({
          name:Poke, 
          species: response.data.species.name, 
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name
        });
        setChoose(true);
      });
    }

  return (
    <>
      <Head>
        <title>Pokemon Api</title>
        <meta name="description" content="This is a Pokemon Api Search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-500 shadow-lg transform skew-y-0 rotate-6 sm:rotate-12 sm:skew-y-0"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-4xl text-center text-gray-900 font-bold">Pokemon</h1>
            <div className="mt-10">
              <input 
                className="bg-purple-white shadow rounded border-0 p-3 w-full" 
                type="text" 
                onChange={(event) => setPoke(event.target.value)}
              />
              <button 
                onClick={pokeSearch} 
                className="bg-gradient-to-r from-purple-800 to-blue-500 hover:from-purple-600 hover:to-blue-400 text-white font-bold rounded-full my-6 py-3 w-full"
              >
                Pokemon Search
              </button>
            </div>
          </div>
        </div>
        <div className="display flex justify-center items-center mt-10">
          {!choose ? (
            <h1 className="text-2xl text-center text-gray-900 font-bold">Enter your Pokemon!!</h1>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-center text-gray-900 font-bold">{PokeEl.name}</h1>
              <img 
                className="my-4 h-40 w-40 object-cover" 
                src={PokeEl.img} 
                alt={PokeEl.name} 
              />
              <div className="flex flex-col items-start">
                <h3 className="text-xl text-gray-900 font-bold">Species: {PokeEl.species}</h3>
                <h3 className="text-xl text-gray-900 font-bold">Type: {PokeEl.type}</h3>
                <h4>Hp: {PokeEl.hp}</h4>
                <h4>Attak: {PokeEl.attack}</h4>
                <h4>Defense: {PokeEl.defense}</h4>
                
              </>
              
            )}
        </div>
      </main>
    </>
    
  )
  
}
