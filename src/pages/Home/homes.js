import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./home.module.css";
import { getProduct } from "../../configs/redux/actions/productAction";
// import axios from "../../configs/axios";
import { Link } from "react-router-dom";
// import image from './image/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png'

const Home = () => {
// const Navigate = useNavigate()
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 10,
    sortby: "name",
    sort: "",
    search: ""
  });
  const { data, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // const [search, setSearch] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams({});
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearchParams({ search: search });
  // };

  useEffect(() => {
    // console.log(searchParams.get("keyword"));
    dispatch(
      getProduct({
        page: page.currentPage,
        limit: page.limit,
        sortby: page.sortby,
        sort: page.sort,
        search: page.search
      })
    );
  }, [page]);

  // const [category, setCategory] = useState([]);
  // async function fetchData() {
  //   try {
  //     const result = await axios({
  //       method: "GET",
  //       url: "/category",
  //     });
  //     setCategory(result.data.data);
  //   } catch (error) {
  //     // console.log(error.response);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  
  console.log();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        {/* <div className={styles.category}>
          <div>
            <h4>Category</h4>
          </div>
          <div>
            <div className={styles.categoryWrapper}>
              {category.map((item, index) => (
                <div className={styles.categoryCard} key={index}>
                  <div className={styles.categoryName}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <div className={styles.productMain}>
          <h4>Product</h4>
          <div>
            {/* <input
              type="text"
              placeholder="Search"
              value={search}
              // onChange={(e) => onHandleChange(e)}
            />
            <button
            onClick={handleSearch}
            >
              Search
            </button> */}
          </div>
          <select
            name="sort"
            id="sort"
            value={page.sortby}
            onChange={(e) => {
              setPage({ ...page, sort: e.target.value });
            }}
          >
            <option value="id"> Sort By </option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className={styles.wrapperCard}>
          {isLoading && <h1>loading.....</h1>}
          {data &&
            data
              // .filter((product) => product.name.toLowerCase().includes(search))
              .map((product) => (
                <Link to={`/detailProduct/${product.id}`} className={styles.linkto}>
                  <div className={styles.card}>
                    <div className={styles.image}>
                      <img src={product.photo} alt={product.name} />
                      {/* <img src={image} alt={product.name} /> */}
                    </div>
                    <h3 className={styles.nameProduct}>{product.name}</h3>
                    <h4 className={styles.priceProduct}>Rp. {product.price}</h4>
                    <p className={styles.storeProduct}>Zalora Cloth</p>
                  </div>
                </Link>
              ))}
        </div>
        <br />
        <div className={styles.btnPagination}>
          <button onClick={() => setPage({ ...page, currentPage: 1 })}>
            1
          </button>
          <button onClick={() => setPage({ ...page, currentPage: 2 })}>
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
