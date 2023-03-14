import styles from '../styles/Card.module.css';

export default function PokeCard({
  id,
  name,
  image,
  status,
  evolution,
  caughtIn,
  currentLocation,
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}



