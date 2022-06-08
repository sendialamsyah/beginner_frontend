import React, { useEffect, useState } from "react";
import NavbarLogin from "../../components/module/Navbar/navbarLogin";
import axios from "../../configs/axios";
import styles from './category.module.css'

const Category = () => {
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
        <NavbarLogin/>
        <div className="container">
        <h1>page Product</h1>
      <div className={styles.categoryWarpper}>
      {category.map((item, index) => (
        <div className={styles.categoryCard} key={index}>
          <div className={styles.categoryName}>{item.name}</div>
          <button onClick={() => deleteCategory(item.id)}>x</button>
        </div>
      ))}
      </div>
        </div>
      
      
    </div>
  );
};

export default Category;
