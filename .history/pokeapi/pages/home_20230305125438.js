import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokeCard from '../components/pokecard'
import AshCard from '../components/AshCard'
import PokeInfoCard from '../components/InfoCard'
import api from '../../data/'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.bg}>
      <div className={styles.containerMain}> 
        <AshCard />
        <div className={styles.div1}>
        <PokeCard text='004 Charmander' src='Charmander.png'/>
        <PokeCard text='025 Pikachu' src='Pikachu.png' me='46px'/>
        <PokeCard text='017 Pidgeot' src='pidgeot.png' me='50px'/>
        <PokeCard text='012 Butterfree' src='Butterfree.png' me="20px"/>
        <PokeCard text='099 Kingler' src='kingler.png' me="40px"/>
 
        
        <PokeCard text='007 Squirtle' src='squirtle.png' me="35px"/>
        <PokeCard text='001 Bulbasaur' src='bulbasaur.png' me='10px'/>
        <PokeCard text='089 Muk' src='muk.png' me="60px"/>
        <PokeCard text='128 Tauros' src='tauros.png' me="38px"/>
        <PokeCard text='057 Primeape' src='primeape.png' me="20px"/>
        </div>
        </div>
      </main>
    </>
  )
}
