import React, { useEffect, useState } from "react";
import styles from "./card.module.css";
import axios from "axios";

const Card = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      baseURL: `${process.env.REACT_APP_API_BACKEND}` ,
      url: "/product",
    })
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.card}>
      {product.map((item) => (
        <div className="card">
          <img src={item.photo} className={styles.cardImgTop} alt={item.name} />
          <div className={styles.cardBody}></div>
          <p className={styles.cardText}>{item.name}</p>
          <p className={styles.cardPrice}>{item.price}</p>
          <p className={styles.cardDescription}>Zalora Cloth</p>
          <p className={styles.star}>
            <span className={styles.rating}>(10)</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
