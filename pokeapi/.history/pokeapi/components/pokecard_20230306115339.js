import styles from '../styles/Card.module.css';

export default function PokeCard({
  name,
  image,
  image2,
  status
}) {
  return (
    <div className={styles.card}>
      <img src={image2} alt={name} />
      <h2>{name}</h2>
      <img src={image} alt={name} />
     <h2
    </div>
  );
}



