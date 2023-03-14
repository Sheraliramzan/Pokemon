import styles from '../styles/Card.module.css';

export default function PokeCard({
  id,
  name,
  image
}) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}



