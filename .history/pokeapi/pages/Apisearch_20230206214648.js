import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
        console.log(response.data);
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
      <main className={styles.mainCont}>
        <div className={styles.main1}>
          <h1 className='headpok'>Pokemon</h1>
          <input className={styles.input} type="text" onChange={(event)=>{
            setPoke(event.target.value)
          }}/>
          <button onClick={pokeSearch} className={styles.button}>Pokemon Search</button>
        </div>
      </main>
    </>
    
  )
  
}
