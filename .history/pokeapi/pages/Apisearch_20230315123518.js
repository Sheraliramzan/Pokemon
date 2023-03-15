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

<main className="min-h-screen flex flex-col justify-center items-center py-4 bg-fixed bg-cover bg-center h-screen" style={{ backgroundImage:"url('pikachu running.gif')" }}>
  <div className="w-full md:w-1/2 max-w-md px-4">
    <div className="bg-amber-100 rounded-lg shadow-lg p-4 mb-4">
      <h1 className='text-4xl font-bold text-center mb-4 text-amber-300'>Pokemon</h1>
      <div className="flex items-center mb-4">
        <input className="border rounded-l-lg px-2 py-1 w-full md:w-4/5" type="text" onChange={(event)=>{
          setPoke(event.target.value)
          setPokeI(event.target.value)
        }}/>
        <button onClick={pokeSearch} className="bg-amber-500 hover:bg-green-600 rounded-r-lg px-4 py-1 text-white">Search</button>
      </div>
    </div>

    <div className="bg-amber-100 rounded-lg shadow-lg p-4">
      {!choose ? (<h1 className="text-center mb-4">Enter your Pokemon!!</h1>) : 
      (
        <div className='flex'>
          <div className='mr-20'>
            <h1 className='text-2xl font-bold mb-2 text-amber-500 '>{PokeEl.name}</h1>
            <img src={PokeEl.img} alt={PokeEl.name} className="mb-4"/>
            <h3 className="text-md mb-1 font-bold">Species: {PokeEl.species}</h3>
            <h3 className="text-lg mb-1 font-bold">Type: {PokeEl.type}</h3>
            <h4 className="text-base mb-1 font-bold">Hp: {PokeEl.hp}</h4>
            <h4 className="text-base mb-1 font-bold">Attack: {PokeEl.attack}</h4>
            <h4 className="text-base mb-1 font-bold">Defense: {PokeEl.defense}</h4>
          </div>
          <div>
            <h1 className='text-2xl font-bold mb-2 text- '>{PokeIL.name}</h1>
            <img src={PokeIL.images} alt={PokeIL.name} className="mb-4"/>
          </div>
        </div>
      )}
    </div>
  </div>
</main>
    </>
    
  )
  
}
