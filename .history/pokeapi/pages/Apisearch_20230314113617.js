import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {

  const [PokeI, setPokeI] = useState('');
  const [PokeIL, setPokeIL] = useState({
    name: "",
    supertype: "",
    subtypes: "",
    hp: "",
    types: "",
    attacks: "",
    weaknesses: "",
    resistances: "",
    retreatCost: "",
    convertedRetreatCost: "",
    set: "",
    number: "",
    artist: "",
    rarity: "",
    series: "",
    setCode: "",
  });

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v2/cards?q=name:pikachu`)
      .then(response => {
        setPokeI(response.data.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  

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
          <h1 className='text-4xl font-bold text-center mb-4 text-amber-300'>Pokemon</h1>
          <div className="flex items-center mb-4">
            <input className="border rounded-l-lg px-2 py-1 w-full md:w-4/5" type="text" onChange={(event)=>{
              setPoke(event.target.value)
            }}/>
            <button onClick={pokeSearch} className="bg-amber-500 hover:bg-green-600 rounded-r-lg px-4 py-1 text-white">Search</button>
          </div>
          <div className="flex flex-col items-center">
              {!choose ? (<h1 className="text-center mb-4">Enter your Pokemon!!</h1>) : 
              (
                <>
                  <div>
                    <h1 className='text-2xl font-bold mb-2 text-amber-500 '>{PokeEl.name}</h1>
                    <img src={PokeEl.img} alt={PokeEl.name} className="mb-4"/>
                    <h3 className="text-lg mb-1 font-bold">Species: {PokeEl.species}</h3>
                    <h3 className="text-lg mb-1 font-bold">Type: {PokeEl.type}</h3>
                    <h4 className="text-base mb-1 font-bold">Hp: {PokeEl.hp}</h4>
                    <h4 className="text-base mb-1 font-bold">Attack: {PokeEl.attack}</h4>
                    <h4 className="text-base mb-1 font-bold">Defense: {PokeEl.defense}</h4>
                  </div>
                  <div>
                  {PokeI &&
                    <div>
                     <h2>{PokeI.name}</h2>
                      <img src={PokeI.images.small} alt={PokeI.name} />
                    </div>
                  }
                  </div>
                </>
                
              )}
          </div>
        </div>
      </main>
    </>
    
  )
  
}
