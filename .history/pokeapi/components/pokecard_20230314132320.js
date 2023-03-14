import styles from '../styles/Card.module.css';

export default function PokeCard({
  name,
  image,
  image2,
  status,,
            "evolution": "Not fully evolved",
            "caught in": "EP010: Bulbasaur and the Hidden Village",
            "current location": "Professor Oaks Laboratory"
}) {
  return (
    <div className={styles.card}>
      <img src={image2} alt={name} />
      <h2>{name}</h2>
      <img src={image} alt={name} />
     
    </div>
  );
}



