import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AshCard from '../components/AshCard'
import PokeCard from '../components/PokeCard'
import PokeInfoCard from '../components/InfoCard'
import ashs from '../../data/ashspokemon.json'


export default function Home() {
  console.log(ashs);
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
            {ashs.map((ash, index) => {
              return (
                <div key={index}>
                  <PokeCard
                    image={ash.Image}
                    name={ash.Name}
                    status={ash.status}
                    evolution={ash.evolution}
                    caughtIn={ash['caught in']}
                    currentLocation={ash['current location']}
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
