import React from "react";
import Card from "../../components/module/card/Card";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./detailProduct.module.css";

const DetailProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h6>
          Home {">"} category {">"} T-Shirt
        </h6>
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
              <div className="col"></div>
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
