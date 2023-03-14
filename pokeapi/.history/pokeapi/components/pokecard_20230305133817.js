import React from 'react';
import styles from '../styles/Card.module.css';

export default function PokeCard  ({ id, image, name, status, evolution, caughtIn, currentLocation }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={`${name} image`} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p>ID: {id}</p>
      <p>Status: {status}</p>
      <p>Evolution: {evolution}</p>
      <p>Caught in: {caughtIn}</p>
      <p>Current location: {currentLocation}</p>
    </div>
  );
};

