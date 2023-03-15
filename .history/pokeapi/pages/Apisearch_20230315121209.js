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
    images: "",
  });
  const [choose,setChoose ] = useState(false);

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${PokeI}`)
      .then(response => {
        console.log(response.data.data);
        setPokeIL({
          name: PokeI,
          supertype: response.data.data[0].supertype,
          subtypes: response.data.data[0].subtypes[0],
          hp: response.data.data[0].hp,
          types: response.data.data[0].types[0],
          attacks: response.data.data[0].attacks[0].name,
          images: response.data.data[0].images.small,
        });
        setChoose(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, [PokeI]);
  

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
  <link rel="icon" href="/Pokeball.png" />
</Head>
<main className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-4 bg">
  <div className="w-full md:w-1/2 max-w-md px-4">
    <h1 className='text-5xl font-bold text-center text-gray-100 mb-8 tracking-wide'>Find Your Pokemon</h1>
    <div className="flex items-center mb-6">
      <input className="border rounded-l-lg px-4 py-2 w-full md:w-4/5 text-gray-700 bg-gray-200 focus:outline-none focus:border-green-500 focus:bg-white transition-all duration-200" type="text" onChange={(event)=>{
        setPoke(event.target.value)
        setPokeI(event.target.value)
      }} placeholder="Enter a Pokemon name or ID"/>
      <button onClick={pokeSearch} className="bg-green-500 hover:bg-green-600 rounded-r-lg px-6 py-2 text-white font-bold ml-2 transition-all duration-200">Search</button>
    </div>
    <div className="flex flex-col items-center">
        {!choose ? (<h1 className="text-center mb-4 text-gray-300">Start by entering a Pokemon name or ID</h1>) : 
        (
          <div className='flex flex-col md:flex-row'>
            <div className='mr-12'>
              <h1 className='text-3xl font-bold mb-4 text-gray-100 '>{PokeEl.name}</h1>
              <img src={PokeEl.img} alt={PokeEl.name} className="mb-4 shadow-lg"/>
              <div className="grid grid-cols-2 gap-4">
                <h3 className="text-lg mb-2 font-bold text-green-400">Species:</h3>
                <p className="text-lg mb-2 text-gray-200">{PokeEl.species}</p>
                <h3 className="text-lg mb-2 font-bold text-green-400">Type:</h3>
                <p className="text-lg mb-2 text-gray-200">{PokeEl.type}</p>
                <h3 className="text-lg mb-2 font-bold text-green-400">HP:</h3>
                <p className="text-lg mb-2 text-gray-200">{PokeEl.hp}</p>
                <h3 className="text-lg mb-2 font-bold text-green-400">Attack:</h3>
                <p className="text-lg mb-2 text-gray-200">{PokeEl.attack}</p>
                <h3 className="text-lg mb-2 font-bold text-green-400">Defense:</h3>
                <p className="text-lg mb-2 text-gray-200">{PokeEl.defense}</p>
              </div>
            </div>
            <div>
              <h1 className='text-3xl font-bold mb-4 text-gray-100 '>{PokeIL.name}</h1>
              <img src={PokeIL.images} alt={PokeIL.name} className="mb-4 shadow-lg"/>
            </div>
          </div>
          
        )}
    </div>
  </div>
</main> 
    </>
    
  )
  
}
