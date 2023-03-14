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
      <main className=" min-h-screen flex flex-col justify-center items-center py-4 bg-fixed bg-cover bg-center h-screen" style={{ backgroundImage:"url('pikachu running.gif')" }}>
        <div className="w-full md:w-1/2 max-w-md px-4">
          <h1 className='text-4xl font-bold text-center mb-4'>Pokemon</h1>
          <div className="flex items-center mb-4">
            <input className="border rounded-l-lg px-2 py-1 w-full md:w-4/5" type="text" onChange={(event)=>{
              setPoke(event.target.value)
            }}/>
            <button onClick={pokeSearch} className="bg-green-500 hover:bg-green-600 rounded-r-lg px-4 py-1 text-white">Search</button>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 max-w-md px-4 bg-white rounded-lg shadow-lg content-center justify-center">
              {!choose ? (<h1 className="text-center mb-4 just">Enter your Pokemon!!</h1>) : 
              (
                <>
                  <h1 className='text-2xl font-bold mb-2'>{PokeEl.name}</h1>
                  <img src={PokeEl.img} alt={PokeEl.name} className="mb-4"/>
                  <h3 className="text-lg mb-1">Species: {PokeEl.species}</h3>
                  <h3 className="text-lg mb-1">Type: {PokeEl.type}</h3>
                  <h4 className="text-base mb-1">Hp: {PokeEl.hp}</h4>
                  <h4 className="text-base mb-1">Attack: {PokeEl.attack}</h4>
                  <h4 className="text-base mb-1">Defense: {PokeEl.defense}</h4>
                  
                </>
                
              )}
          </div>
        </div>
      </main>
    </>
    
  )
  
}
