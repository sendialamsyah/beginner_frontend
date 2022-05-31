import React from "react";
import NavbarLogin from "../../components/module/Navbar/navbarLogin";
import styles from "./checkout.module.css";
import image1 from "./image/gez-xavier.png";
import image2 from "./image/kemal-alkan.png";

const Checkout = () => {
  return (
    <div>
      <NavbarLogin />
      <div className="container">
        <h4>Checkout</h4>
        <h6>Shipping Address</h6>
        <div className="row row-cols-2">
          <div className={`col ${styles.box1}`}>
            <h3>Andreas Jane</h3>
            <p>
              Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
              Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
              Kab. Banyumas, 53181
            </p>
            <button>Choose another address</button>
          </div>
          <div className={`col ${styles.box2}`}>
            <p className={styles.text1}>Shopping summary</p>
            <p className={styles.text2}>
              Order <span className={styles.text3}>$ 40.0</span>
            </p>
            <p className={styles.text4}>
              Delivery <span className={styles.text5}>$ 5.0</span>
            </p>
            <hr />
            <p className={styles.text6}>
              Shopping summary <span className={styles.text7}>$ 45.0</span>
            </p>
            <button className={styles.btn}>Select Payment</button>
          </div>
        </div>
      </div>
      <div className={`col ${styles.items}`}>
        <div className={`col ${styles.box3}`}>
          <img src={image1} alt="formal-suite" />
          <p className={styles.text1}>
            Men's formal suit - Black{" "}
            <span className={styles.text3}>$ 20.0</span>
          </p>
          <p className={styles.text2}>Zalora Cloth</p>
        </div>
        <div className={`col ${styles.box4}`}>
          <img src={image2} alt="jacket" />
          <p className={styles.text1}>
            Men's Jacket jeans <span className={styles.text3}>$ 20.0</span>
          </p>
          <p className={styles.text2}>Zalora Cloth</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
