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
      <img src={`./images/${image}`} alt={name} />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Status: {status}</p>
      <p>Evolution: {evolution}</p>
      <p>Caught in: {caughtIn}</p>
      <p>Current location: {currentLocation}</p>
    </div>
  );
}
Note that we import the Card.module.css file and use it to style the container element (<div className={styles.card}>) and its child elements (<img>, <h2>, <p>). Also, we use template literals to interpolate the image prop to set the src attribute of the <img> element. Finally, we pass the relevant props to the PokeCard component to display the relevant information in the card.





