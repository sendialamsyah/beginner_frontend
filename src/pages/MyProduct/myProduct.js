import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./myProduct.module.css";
import profile1 from "../../assets/image/defaultprofile.png";
import imgStore from "../../assets/icon/home (2) 1.png";
import imgProduct from "../../assets/icon/package 1.png";
import imgOrder from "../../assets/icon/shopping-cart (3) 1.png";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { getProduct } from "../../configs/redux/actions/productAction";

const MyProduct = () => {
  const Navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(`${process.env.REACT_APP_API_RAILWAY}/users/profile`, {
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
  //   console.log(profile);

  const [page, setPage] = useState({
    currentPage: 1,
    limit: 5,
    sortby: "name",
    sort: "",
    search: "",
  });
  const { data, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProduct({
        page: page.currentPage,
        limit: page.limit,
        sortby: page.sortby,
        sort: page.sort,
        search: page.search,
      })
    );
  }, [page]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    swal("Good Job!", "User Logout", "success");
    Navigate("/loginCustomer");
  };
  const deleteProduct = (id) => {
    axios.delete(`${process.env.REACT_APP_API_RAILWAY}/product/${id}`).then(() => {
      swal("Good Job!", "Delete product", "success");
      fetchData();
    });
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
      <main>
        <h1>My Product</h1>
        <hr />
        <table className={styles.contentTable}>
        {isLoading && <h1>loading.....</h1>}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data &&
            data
              .map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={()=>Navigate(`/editProduct/${product.id}`)} className={`btn btn-danger ${styles.btnAction}`}>edit</button>
                <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>delete</button>
                </td>
            </tr>
          ))}
          </tbody>
        </table>
        <div className={styles.btnPagination}>
          <button onClick={() => setPage({ ...page, currentPage: 1 })}>
            1
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 2 })}>
            2
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 3 })}>
            3
          </button>
        </div>
      </main>
    </div>
  );
};

export default MyProduct;
