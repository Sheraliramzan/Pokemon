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
      <h2>{name}</h2>
      
    </div>
  );
}



