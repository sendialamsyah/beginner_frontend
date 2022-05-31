import React from "react";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./home.module.css";
import image1 from "./image/ian-dooley-C6BrEIucDDU-unsplash 1.png";
import image2 from "./image/benjamin-voros-TnNo84AJJ5A-unsplash 1.png";
import image3 from "./image/ian-dooley-10ca-K3e6Ko-unsplash 1.png";
import image4 from "./image/jonathan-francisca-HY-Nr7GQs3k-unsplash 1.png";
import tshirt from "./image/hiclipart 15.png";
import shorts from "./image/hiclipart 21.png";
import jacket from "./image/hiclipart 22.png";
import pants from "./image/hiclipart 26.png";
import shoes from "./image/hiclipart 34.png";
import Card from "../../components/module/card/Card";
// import axios from 'axios'

const Home = () => {
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className={styles.slide}>
          <section className="row row-cols-4">
            <div className={`col ${styles.box1}`}>
              <img src={image1} alt="" />
            </div>
            <div className={`col ${styles.box2}`}>
              <img src={image2} alt="" />
            </div>
            <div className={`col ${styles.box3}`}>
              <img src={image3} alt="" />
            </div>
            <div className={`col ${styles.box4}`}>
              <img src={image4} alt="" />
            </div>
          </section>
        </div>
        <div className={styles.category}>
          <div>
            <h4>Category</h4>
            <h6>What are you currently looking for</h6>
          </div>
          <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5" />
            <div className="col-1">
              <div className={styles.image1}>
                <img src={tshirt} alt="t-shirt" />
                <p>T-Shirt</p>
              </div>
            </div>
            <div className="col-2">
              <div className={styles.image2}>
                <img src={shorts} alt="shorts" />
                <p>Shorts</p>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.image3}>
                <img src={jacket} alt="jacket" />
                <p>jacket</p>
              </div>
            </div>
            <div className="col">
              <div className={styles.image4}>
                <img src={pants} alt="pants" />
                <p>Pants</p>
              </div>
            </div>
            <div className="col">
              <div className={styles.image5}>
                <img src={shoes} alt="shoes" />
                <p>Shoes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="new">
          <h4>New</h4>
          <h6>You’ve never seen it before!</h6>
        </div>
        <div className={`row row-cols-6 ${styles.rowCard}`}>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>

        <div className="new">
          <h4>Popular</h4>
          <h6>Find clothes that are trending recently</h6>
        </div>
        <div className={`row row-cols-6 ${styles.rowCard}`}>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
