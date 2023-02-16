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
import ButtonNav from "../../base/Button/buttonNav";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

const Navbar = () => {
  const Navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setIsLogin(true)
    }
  }, [])

 
  const [profile, setProfile] = useState([]);
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(`${process.env.REACT_APP_API_CYCLIC}/users/profile`, {
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

  const link = (profile.role === 'user') ? '/profileCustomer' : '/profileSeller'

  return (
    <div>
      <nav className="navbar bg-light navbar-default navbar-fixed-top">
        <div className="d-flex nav-flex">
          <div className="navLogo">
            <Link to="/" className="linkto">
              <Logo width="25px" height="35px" fontSize="20px" />
            </Link>
          </div>
          <div className="navSearch">
            <InputSearch />
            <img src={image1} alt="" className="filter1" />
            <img src={image2} alt="filter" className="filter2" />
          </div>
          {isLogin ? 
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
            <div  className="profile1" >
              <img src={profile.photo? profile.photo : profile1} alt="" onClick={()=>Navigate(link)}/>
            </div>
          </div>
          :
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
          }
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
