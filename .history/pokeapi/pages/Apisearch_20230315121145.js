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
   
    </>
    
  )
  
}
