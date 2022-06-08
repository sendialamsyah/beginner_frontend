import React from "react";
import InputSearch from "../../base/Input/search";
import Logo from "../../base/logo/index";
import "./navbar.css";
import image1 from "./image/Search Field.png";
import image2 from "./image/filter.png";
import cart1 from "./image/cart.png";
import cart2 from "./image/cart-2.png";
import ButtonNav from "../../base/Button/buttonNav";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <nav className="navbar bg-light navbar-default navbar-fixed-top">
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
            <ButtonNav
              title="Login"
              bgColor="#DB3022"
              textColor="#FFFFFF"
              onClick={() => Navigate("/loginCustomer")}
            />
            <ButtonNav
              title="Signup"
              bgColor="#FFFFFF"
              textColor="#9B9B9B"
              onClick={() => Navigate("/registerCustomer")}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
