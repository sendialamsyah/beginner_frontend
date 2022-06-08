import React from "react";
import InputSearch from "../../base/Input/search";
import Logo from "../../base/logo/index";
import "./navbar.css";
import image1 from "./image/Search Field.png";
import image2 from "./image/filter.png";
import cart1 from "./image/cart.png";
import cart2 from "./image/cart-2.png";
import bell1 from "./image/bell-1.png";
import bell2 from "./image/bell-2.png";
import mail1 from "./image/mail-1.png";
import mail2 from "./image/mail-2.png";
import profile1 from "./image/christian-buehner.png";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="d-flex nav-flex">
          <div className="navLogo">
            <Link to="/">
              <Logo width="25px" height="35px" fontSize="20px" />
            </Link>
          </div>
          <div className="navSearch">
            <InputSearch />
            <img src={image1} alt="" className="filter1" />
            <img src={image2} alt="filter" className="filter2" />
          </div>
          <div className="d-flex nav-cart">
            <Link to="/myBag">
              <img src={cart1} alt="" className="cart1" />
              <img src={cart2} alt="" className="cart2" />
              <img src={cart2} alt="" className="cart3" />
            </Link>
            <img src={bell1} alt="" className="bell1" />
            <img src={bell2} alt="" className="bell2" />
            <img src={mail1} alt="" className="mail1" />
            <img src={mail2} alt="" className="mail2" />
            <Link to="/profileCustomer">
              <img src={profile1} alt="" className="profile1" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLogin;
