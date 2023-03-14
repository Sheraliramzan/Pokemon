import styles from '../styles/Card.module.css';

export default function PokeCard({
  name,
  image,
}) {
  return (
    <div className={styles.card}>
      <img src={ima} alt={name} />
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}



