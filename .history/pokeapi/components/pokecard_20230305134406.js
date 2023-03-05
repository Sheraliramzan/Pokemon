import styles from '../styles/Card.module.css';

export default function PokeCard({
  id,
  name,
  image,
}) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <img src={`./images/${image}`} alt={name} />
    </div>
  );
}



