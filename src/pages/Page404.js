import React, { useEffect, useState } from "react";
import axios from "axios";

const Page404 = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:4000/v1",
      url: "/category",
    })
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Page Not Found</h1>
      {category.map((item) => (
        <div className="card">
          <div className="card-body">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Page404;
