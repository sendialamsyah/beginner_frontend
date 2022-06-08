import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./home.module.css";
import { getProduct } from "../../configs/redux/actions/homeAction";
import axios from "../../configs/axios";
import image from './image/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'

const Home = () => {
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 5,
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
        sort: page.sort,
        search: page.search,
      })
    );
  }, [page]);
  const [category, setCategory] = useState([]);
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        url: "/category",
      });
      setCategory(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const deleteCategory = (id) => {
    axios.delete(`http://localhost:4000/v1/category/${id}`).then(() => {
      alert("delete success");
      fetchData();
    });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className={styles.category}>
          <div>
            <h4>Category</h4>
          </div>
          <div>
            <div className={styles.categoryWrapper}>
              {category.map((item, index) => (
                <div className={styles.categoryCard} key={index}>
                  <div className={styles.categoryName}>{item.name}</div>
                  <button onClick={() => deleteCategory(item.id)}>x</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="product">
          <h4>Product</h4>
        </div>
        <div>
          <select
            name="sort"
            id="sort"
            value={page.sort}
            onChange={(e) => {
              setPage({ ...page, sort: e.target.value });
            }}
          >
            <option value=""> - </option>
            <option value="byPrice">harga terendah</option>
            <option value="byName">A-Z</option>
          </select>
        </div>
        <div className={styles.wrapperCard}>
          {isLoading && <h1>loading.....</h1>}
          {data &&
            data.map((product) => (
              <div className={styles.card}>
                <div className={styles.image}>
                  {/* <img src={product.photo} alt={product.name} /> */}
                  <img src={image} alt={product.name} />
                </div>
                <h3 className={styles.nameProduct}>{product.name}</h3>
                <p className={styles.stockProduct}>{product.stock}</p>
                <h4 className={styles.priceProduct}>{product.price}</h4>
              </div>
            ))}
        </div>
        <br />
        <div>
          <button onClick={() => setPage({ ...page, currentPage: 1 })}>
            1
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 2 })}>
            2
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 3 })}>
            3
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 4 })}>
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
