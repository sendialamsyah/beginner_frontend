import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogin from "../../../components/base/Button/buttonLogin";
import ButtonPrimary from "../../../components/base/Button/buttonPrimary";
import InputLogin from "../../../components/base/Input/inputLogin";
import Logo from "../../../components/base/logo";
import "./login.css";
import { loginUser } from "../../../configs/redux/actions/userAction";

const LoginCustomer = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formLogin, Navigate));
  };
  return (
    <div className="warpper">
      <div>
        <Logo width="30px" height="40px" fontSize="28px" />
      </div>
      <div className="formWarpper">
        <p className="content">Please login with your account</p>
        <div className="d-flex justify-content-center">
          <ButtonLogin
            title="COSTUMER"
            bgColor="#DB3022"
            textColor="#FFFFFF"
            onClick={() => Navigate("/loginCustomer")}
          />
          <ButtonLogin
            title="SELLER"
            textColor="#9B9B9B"
            onClick={() => Navigate("/loginSeller")}
          />
        </div>
        <form onSubmit={handleLogin}>
          <InputLogin
            type="email"
            name="email"
            id="email"
            value={formLogin.email}
            placeholder="Name"
            onChange={handleChange}
          />
          <InputLogin
            type="password"
            name="password"
            id="password"
            value={formLogin.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <p className="forgotPassword">Forgot Password?</p>
          <ButtonPrimary title="LOGIN" textColor="#FFFFFF" />
          <p className="content2">
            Don't have a Tokopedia account?
            <Link to="/registerCustomer">
              <span>register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginCustomer;
