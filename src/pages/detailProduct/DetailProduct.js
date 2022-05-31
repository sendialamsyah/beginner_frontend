import React from "react";
import Card from "../../components/module/card/Card";
import Counter from "../../components/module/Counter";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./detailProduct.module.css";
import image1 from './image/cruzrone-shoe-l6XXkk 1.png'
import image2 from './image/cruzrone-shoe-l6XXkk 2.png'
import image3 from './image/cruzrone-shoe-l6XXkk 3.png'
import image4 from './image/cruzrone-shoe-l6XXkk 4.png'
import elips from './image/Ellipse 11.png'

const DetailProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h6>
          Home {">"} category {">"} T-Shirt
        </h6>
        <div className={`row row-cols-4 ${styles.productImg}`}>
          <div className={`col ${styles.box1}`}>
              <img src={image1} alt="" />
          </div>
          <div className={`col ${styles.box2}`}>
              <img src={image2} alt="" />
          </div>
          <div className={`col ${styles.box3}`}>
          <p className={styles.text1}>Nike CruzrOne (Bright Crimson)</p>
                <p className={styles.text2}>Nike</p>
                <p className={styles.star}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className={styles.rating}>(10)</span>
                </p>
                <p className={styles.text3}>Price</p>
                <p className={styles.text4}>$ 20.0</p>
                <p className={styles.text5}>Color</p>
                <p>
                    <img src={elips} alt="" className={styles.colorBlack}/>
                    <img src={elips} alt="" className={styles.colorRed}/>
                    <img src={elips} alt="" className={styles.colorBlue}/>
                    <img src={elips} alt="" className={styles.colorGreen}/>
                </p>
                <p className={styles.text6}>Size</p>
                <p>
                <Counter/>
                </p>
                <p className={styles.text7}>Jumlah</p>
                <p className={styles.counterQty}>
                <Counter/>
                </p>
                <button className={styles.btnChat}>Chat</button>
                <button className={styles.btnAddBag}>Add Bag</button>
                <button className={styles.btnBuy}>Buy Now</button>
          </div>
          <div className={`col ${styles.box4}`}>
              <img src={image3} alt="" />
          </div>
          <div className={`col ${styles.box5}`}>
              <img src={image4} alt="" />
          </div>
        </div>
        <div className="col">
          <div className={`col ${styles.information}`}>
            <h2>Informasi Produk</h2>
          </div>
          <div className={`col ${styles.condition}`}>
            <h5>Condition</h5>
            <p>New</p>
          </div>
          <div className={`col ${styles.description}`}>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> <br />
              Donec non magna rutrum, pellentesque augue eu, sagittis velit.
              Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent sed
              enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt
              tristique placerat. Pellentesque a consequat mauris, vel suscipit
              ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam
              elit, sollicitudin eu nisl at, ornare suscipit magna.
              <br /> <br />
              Donec non magna rutrum, pellentesque augue eu, sagittis velit.
              Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Praesent sed
              enim vel turpis blandit imperdiet ac ac felis.
              <br /> <br />
              In ultricies rutrum tempus. Mauris vel molestie orci.
            </p>
          </div>
          <div className={`col ${styles.review}`}>
            <h2>Product Review</h2>
            <div className="row">
              <div className={`col ${styles.rate}`}>
                <h1>5.0</h1>
                <p className={styles.maksRate}>/10</p>
                <p className={styles.star}>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </p>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.popular}>
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

export default DetailProduct;
