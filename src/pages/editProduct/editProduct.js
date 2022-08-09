import React, { useEffect, useState } from "react";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./editProduct.module.css";
import profile1 from "../../assets/image/icon/christian-buehner-DItYlc26zVI-unsplash 1.png";
import imgStore from "../../assets/icon/home (2) 1.png";
import imgProduct from "../../assets/icon/package 1.png";
import imgOrder from "../../assets/icon/shopping-cart (3) 1.png";
import axios from "axios";
import {
  getDetailProduct,
  updateProduct,
} from "../../configs/redux/actions/productAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { UpdateProduct } from "../../configs/redux/actions/sellingAction";
import swal from 'sweetalert'

const editProduct = () => {
  const Navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(`${process.env.REACT_APP_API_HEROKU}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(profile);
  const [formUpdate, setFormUpdate] = useState({
    id: 0,
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
  });

  const dispatch = useDispatch();
  const params = useParams();

  const handleGetDetail = async () => {
    const result = await dispatch(getDetailProduct(params.id));
    console.log(result);
    setFormUpdate({
      ...formUpdate,
      id: result.id,
      name: result.name,
      description: result.description,
      price: result.price,
      stock: result.stock,
      photo: result.photo,
      file_photo: null,
    });
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  const handleChangeFile = (e) => {
    const filePhoto = e.target.files[0];
    const preview = URL.createObjectURL(filePhoto);
    setFormUpdate({
      ...formUpdate,
      file_photo: filePhoto,
      photo: preview,
    });
  };

  const handleChange = (e) => {
    setFormUpdate((current) => {
      return {
        ...current,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleUpdate = (e) => {
    // e.preventDefault();
    // axios
    //   .post("http://localhost:4000/v1/product", formUpdate)
    //   .then((res) => {
    //     console.log(res);
    //     alert("Update data success");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Update data error");
    //   });
    // // dispatch(UpdateProduct(formUpdate));
    // console.log(formUpdate);
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formUpdate.name);
    formData.append("description", formUpdate.description);
    formData.append("stock", formUpdate.stock);
    formData.append("price", formUpdate.price);
    // formData.append('id_category', form.id_category)
    formData.append("photo", formUpdate.file_photo);
    dispatch(updateProduct(formUpdate.id, formData))
      .then(() => {
        swal("Good Job!", "Update Success", "success")
        Navigate('/myProduct')
      })
      .catch((error) => {
        console.log(error)
       swal("Update Failed", "", "error")
      });
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    swal("Good Job!", "User Logout", "success");
    Navigate("/loginCustomer");
  };
  return (
    <div>
      <Navbar />
      <aside>
      <div className={styles.profile}>
          <div className={styles.imgProfile}>
            <img src={profile.photo ? profile.photo : profile1} alt="" />
          </div>
          <h4>{profile.fullname}</h4>
          <p onClick={handleLogout}>Logout</p>
        </div>
        <div className={`col ${styles.mainBox}`}>
          <div className={`col ${styles.box1}`}>
            <Link to="/profileSeller" className={styles.linkto}>
              <div className={styles.bgBox1}>
                <img src={imgStore} alt="" />
              </div>
              <h3>Store</h3>
            </Link>
          </div>
          <div className={`col ${styles.box2}`}>
            <Link to="/myProduct" className={styles.linkto}>
              <div className={styles.bgBox2}>
                <img src={imgProduct} alt="" />
              </div>
              <h3>My Product</h3>
            </Link>
          </div>
          <div className={`col ${styles.box3}`}>
            <Link to="/sellingProduct" className={styles.linkto}>
              <div className={styles.bgBox3}>
                <img src={imgOrder} alt="" />
              </div>
              <h3>Selling Product</h3>
            </Link>
          </div>
        </div>
      </aside>
      <form onSubmit={handleUpdate}>
        <section className={styles.inventory}>
          <div className="row">
            <div className="col">
              <h4 className={styles.inventory1}>Inventory</h4>
              <hr />
              <h4 className={styles.nameOfGoods}>Name of goods</h4>
              <input
                type="text"
                name="name"
                id="name"
                value={formUpdate.name}
                onChange={handleChange}
                className={styles.inputName}
              />
            </div>
          </div>
        </section>
        <section className={styles.itemDetails}>
          <div className="row">
            <div className="col">
              <h4 className={styles.itemDetails1}>Item Details</h4>
              <hr />
              <h4 className={styles.unitPrice}>Unit Price</h4>
              <input
                type="text"
                name="price"
                id="price"
                value={formUpdate.price}
                onChange={handleChange}
                className={styles.inputUnitPrice}
              />
              <h4 className={styles.stock}>Stock</h4>
              <input
                type="text"
                name="stock"
                id="stock"
                value={formUpdate.stock}
                onChange={handleChange}
                className={styles.inputStock}
                placeholder="Buah"
              />
              {/* <h4 className={styles.stock1}>Stock</h4> */}
              {/* <input
              type="radio"
              name="new"
              id="new"
              className={styles.radioNew}
            />
            <label htmlFor="new" className={styles.labelNew}>
              Baru
            </label>
            <input
              type="radio"
              name="second"
              id="second"
              className={styles.radioSecondhand}
            />
            <label htmlFor="second" className={styles.labelSecondhand}>
              Bekas
            </label> */}
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
                    <img src={formUpdate.photo} alt="preview" />
                  </div>
                </div>
                <hr />
                <input
                      type="file"
                      name="photo"
                      accept="image/png, image/jpg, image/jpeg"
                      onChange={handleChangeFile}
                      className={styles.btnUpload}
                    />
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
                  {/* <img src="./assets/image/Screenshot (86) 1.png" alt="" /> */}
                  <textarea
                    name="description"
                    id="description"
                    value={formUpdate.description}
                    onChange={handleChange}
                    cols="65"
                    rows="11"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button type="submit" className={styles.btnSell}>
          Update
        </button>
      </form>
    </div>
  );
};

export default editProduct;
