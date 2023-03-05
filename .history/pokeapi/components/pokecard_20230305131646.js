import styled from 'styled-components' 
function PokeCard({ ash }) {
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
Modify the Home component to pass the ash object to the PokeCard component as a prop:
javascript
Copy code
{ashs.map((ash, index) => {
  return (
    <div key={index}>
      <PokeCard ash={ash} />
    </div>
  )
})}
Now you can access the Name property of the ash object inside the PokeCard component by using ash.Name.





