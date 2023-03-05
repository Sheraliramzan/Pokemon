import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PokeCard from '../components/pokecard'
import AshCard from '../components/AshCard'
import PokeInfoCard from '../components/InfoCard'
import api from '../../data/ashspokemon.json'


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
            {api.map((api, index) => {
              return (
                <div key={index}>
                  <PokeCard
                    title={api.NAME
                  />
                </div>
              )
            })}
        </div>
        </div>
      </main>
    </>
  )
}
