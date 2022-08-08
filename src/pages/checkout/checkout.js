import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./checkout.module.css";
// import image1 from "./image/gez-xavier.png";
// import image2 from "./image/kemal-alkan.png";

const Checkout = () => {
  const [checkout, setCheckout] = useState("");
  // eslint-disable-next-line
  const [delivery, setDelivery] = useState(25000);

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(`${process.env.REACT_APP_API_HEROKU}/checkout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCheckout(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(checkout);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h4>Checkout</h4>
        <h6>Shipping Address</h6>
        <div className="row row-cols-2">
          <div className={`col ${styles.box1}`}>
            <h3> {checkout ? checkout[0].fullname : "sendi"} </h3>
            <p>{checkout ? checkout[0].address : "address"}</p>
            <button>Choose another address</button>
          </div>
          <div className={`col ${styles.box2}`}>
            <p className={styles.text1}>Shopping summary</p>
            <p className={styles.text2}>
              Order{" "}
              <span className={styles.text3}>
                {checkout ? checkout[0].total : 0}
              </span>
            </p>
            <p className={styles.text4}>
              Delivery <span className={styles.text5}>{delivery}</span>
            </p>
            <hr />
            <p className={styles.text6}>
              Shopping summary{" "}
              <span className={styles.text7}>
                {checkout ? checkout[0].total + delivery : 0}
              </span>
            </p>
            <button className={styles.btn}>Select Payment</button>
          </div>
        </div>
      </div>
      <div className={`col ${styles.items}`}>
        <div className={styles.warpperCheckout}>
          {checkout &&
            checkout.map((item, index) => (
              <div className={`col ${styles.box3}`}>
                <img src={item.photo} alt="formal-suite" />
                <p className={styles.text1}>{item.product_name}</p>

                <p className={styles.text3}>Rp. {item.price}</p>
                <p className={styles.text2}>Zalora Cloth</p>
                <p className={styles.text4}>{item.quantity} pcs</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
