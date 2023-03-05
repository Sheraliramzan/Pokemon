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
      <img><img/>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Status: {status}</p>
      <p>Evolution: {evolution}</p>
      <p>Caught in: {caughtIn}</p>
      <p>Current location: {currentLocation}</p>
    </div>
  );
}



