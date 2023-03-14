
export default function PokeCard({ ash }) {
  return (
    <div className={styles.card}>
      <div className={styles.pokemonName}>
        <h2>{ash.Name}</h2>
      </div>
      <div className={styles.pokemonImage}>
        <Image
          src={`/images/${ash.Image}`}
          alt={ash.Name}
          width={200}
          height={200}
        />
      </div>
      <div className={styles.pokemonDetails}>
        <p>Status: {ash.status}</p>
        <p>Evolution: {ash.evolution}</p>
        <p>Caught in: {ash["caught in"]}</p>
        <p>Current location: {ash["current location"]}</p>
      </div>
    </div>
  );
}





