import React from "react";
import styles from "./logo.module.css";
import logo from "./logo.png";

const Logo = ({width, height, fontSize}) => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" width={width} height={height} />
      <span style={{ fontSize: fontSize }} >Blanja</span>
    </div>
  );
};

export default Logo;
