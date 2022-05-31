import React from "react";
import styles from './card.module.css'
import image from './image/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        src={image}
        className={styles.cardImgTop}
        alt="..."
      />
      <div className={styles.cardBody}>
        <p className={styles.cardText}>Men's formal suit - Black & White</p>
        <p className={styles.cardPrice}>$ 40.0</p>
        <p className={styles.cardDescription}>Zalora Cloth</p>
        <p className={styles.star}>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className={styles.rating}>(10)</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
