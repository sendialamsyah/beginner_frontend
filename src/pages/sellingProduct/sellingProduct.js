import React from "react";
import NavbarProfile from "../../components/module/Navbar/navbarProfile";
import styles from "./sellingProduct.module.css";
import profile1 from "./image/christian-buehner-DItYlc26zVI-unsplash 1.png";
import image1 from './image/Rectangle 626.png'

const SellingProduct = () => {
  return (
    <div>
      <NavbarProfile />
      <aside>
        <div className={styles.profile}>
          <img src={profile1} alt="" className={styles.imgProfile} />
          <h4>Johanes Mikael</h4>
          <img
            src="./assets/image/Vector.png"
            alt=""
            className={styles.vector}
          />
          <p>Ubah Profile</p>
        </div>
        <div className={`col ${styles.mainBox}`}>
          <div className={`col ${styles.box1}`}>
            <img src="./assets/image/Ellipse 281 (1).png" alt="" />
            <h3>Store</h3>
          </div>
          <div className={`col ${styles.box2}`}>
            <img src="./assets/image/Ellipse 282.png" alt="" />
            <h3>Product</h3>
          </div>
          <div className={`col ${styles.box3}`}>
            <img src="./assets/image/Ellipse 286.png" alt="" />
            <h3>Order</h3>
          </div>
        </div>
      </aside>
      <section className={styles.inventory}>
        <div className="row">
          <div className="col">
            <h4 className={styles.inventory1}>Inventory</h4>
            <hr />
            <h4 className={styles.nameOfGoods}>Name of goods</h4>
            <input type="text" name="name-of-goods" className={styles.inputName} />
          </div>
        </div>
      </section>
      <section className={styles.itemDetails}>
        <div className="row">
          <div className="col">
            <h4 className={styles.itemDetails1}>Item Details</h4>
            <hr />
            <h4 className={styles.unitPrice}>Unit Price</h4>
            <input type="text" name="unit-price" className={styles.inputUnitPrice} />
            <h4 className={styles.stock}>Stock</h4>
            <input
              type="text"
              name="stock"
              className={styles.inputStock}
              placeholder="Buah"
            />
            <h4 className={styles.stock1}>Stock</h4>
            <input type="radio" name="baru" className={styles.radioNew} />
            <label for="baru" className={styles.labelNew}>
              Baru
            </label>
            <input type="radio" name="bekas" className={styles.radioSecondhand} />
            <label for="bekas" className={styles.labelSecondhand}>
              Bekas
            </label>
          </div>
        </div>
      </section>
      <section className={styles.photoOfGoods}>
        <div className="row">
          <div className="col">
            <h4 className={styles.photoOfGoods1}>Photo of goods</h4>
            <hr />
            <div className={`col ${styles.box1}`}>
              <div className="row row-cols-5">
                <div className={`col ${styles.box2}`}>
                  <img src={image1} alt="" />
                  <p>Foto Utama</p>
                </div>
                <div className={`col ${styles.box3}`}>
                  <img src="./assets/image/Rectangle 629.png" alt="" />
                </div>
                <div className={`col ${styles.box4}`}>
                  <img src="./assets/image/Rectangle 628.png" alt="" />
                </div>
                <div className={`col ${styles.box5}`}>
                  <img src="./assets/image/Rectangle 627.png" alt="" />
                </div>
                <div className={`col ${styles.box6}`}>
                  <img src="./assets/image/Rectangle 622.png" alt="" />
                </div>
              </div>
              <hr />
              <button className={styles.btnUpload}>Upload foto</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.description}>
        <div className="row">
          <div className="col">
            <h4 className={styles.description1}>Description</h4>
            <hr />
            <div className="row">
              <div className={`col ${styles.textArea}`}>
                <img src="./assets/image/Screenshot (86) 1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className={styles.btnSell}>Jual</button>
    </div>
  );
};

export default SellingProduct;
