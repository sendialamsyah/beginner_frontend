import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import Card from "../../components/module/card/Card";
import Counter from "../../components/module/Counter";
import Navbar from "../../components/module/Navbar/navbar";
import { getDetailProduct } from "../../configs/redux/actions/productAction";
import styles from "./detailProduct.module.css";
import elips from "./image/Ellipse 11.png";
import swal from "sweetalert";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const Navigate = useNavigate()
  const [detailProduct, setDetailProduct] = useState({
    name: "",
    photo: "",
    price: "",
    stock: "",
    description: "",
  });
  const [qty, setQty] = useState(1);
  const handleGetDetail = async () => {
    const result = await dispatch(getDetailProduct(params.id));
    console.log(result);
    setDetailProduct({
      ...detailProduct,
      name: result.name,
      photo: result.photo,
      price: result.price,
      stock: result.stock,
      description: result.description,
    });
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  // const {detail: detailProduct} = useSelector((state) => state.product);
  // console.log(detailProduct)

  const handleIncrement = () => {
    setQty(qty + 1);
    setAddToCart({ ...addToCart, quantity: qty + 1 });
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
      setAddToCart({ ...addToCart, quantity: qty - 1 });
    }
  };

  const [addToCart, setAddToCart] = useState({
    product_id: params.id,
    quantity: qty,
  });

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${process.env.REACT_APP_API_CYCLIC}/cart`, addToCart, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      swal({
        title: "Success",
        text: "Add To Cart Success!",
        icon: "success",
      });
      Navigate('/myBag')
    } catch (error) {
      console.log(error);
      swal({
        title: "Error",
        text: "Add to cart failed",
        icon: "error",
      });
    }
  };

  // console.log(productData)
  // console.log(addToCart)
  return (
    <div>
      <Navbar />
      <div className="container">
        <h6>
          Home {">"} category {">"} T-Shirt
        </h6>
        <div className={`row row-cols-4 ${styles.productImg}`}>
          <div className={`col ${styles.box1}`}>
            <img src={detailProduct.photo} alt="" className={styles.productDetail} />
          </div>
          <div className={`col ${styles.box2}`}>
            <img src={detailProduct.photo} alt="" className={styles.productDetail}/>
          </div>
          <div className={`col ${styles.box3}`}>
            <p className={styles.text1}>{detailProduct.name}</p>
            <p className={styles.text2}>Zalora Cloth</p>
            {/* <p className={styles.star}>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className={styles.rating}>(10)</span>
            </p> */}
            <p className={styles.text3}>Price</p>
            <p className={styles.text4}>{detailProduct.price}</p>
            <p className={styles.text5}>Color</p>
            <p>
              <img src={elips} alt="" className={styles.colorBlack} />
              <img src={elips} alt="" className={styles.colorRed} />
              <img src={elips} alt="" className={styles.colorBlue} />
              <img src={elips} alt="" className={styles.colorGreen} />
            </p>
            <p className={styles.text6}>Size</p>
            <p>
              <Counter />
            </p>
            <p className={styles.text7}>Jumlah</p>
            <p className={styles.counterQty}>
              <button onClick={handleDecrement}>-</button>
              <p> {qty} </p>
              <button onClick={handleIncrement}>+</button>
            </p>
            {/* <button className={styles.btnChat}>Chat</button> */}
            {/* <button className={styles.btnAddBag}>Add Bag</button> */}
            <button className={styles.btnBuy} onClick={handleAddToCart}>
              Add To Bag
            </button>
          </div>
          <div className={`col ${styles.box4}`}>
            <img src={detailProduct.photo} alt="" className={styles.productDetail}/>
          </div>
          <div className={`col ${styles.box5}`}>
            <img src={detailProduct.photo} alt="" className={styles.productDetail}/>
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
              {detailProduct.description}
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
        {/* <hr /> */}
        {/* <div className={styles.popular}>
          <h4>Popular</h4>
          <h6>Find clothes that are trending recently</h6>
        </div> */}
        <div className={`row row-cols-6 ${styles.rowCard}`}>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
