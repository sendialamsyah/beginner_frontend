import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogin from "../../../components/base/Button/buttonLogin";
import ButtonPrimary from "../../../components/base/Button/buttonPrimary";
import InputLogin from "../../../components/base/Input/inputLogin";
import Logo from "../../../components/base/logo";
import { registerUser } from "../../../configs/redux/actions/userAction";
import "../login/login.css";

const RegisterCustomer = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch()
  const [formRegister, setFormRegister] = useState({
    role: "user",
    email: "",
    password: "",
    fullname: "",
  });

  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(formRegister, Navigate));
  };

  return (
      <div className="warpper">
        <div>
          <Logo width="30px" height="40px" fontSize="28px" />
        </div>
        <div className="formWarpper">
          <p className="content">Please sign up with your account</p>
          <div className="d-flex justify-content-center">
            <ButtonLogin
              title="COSTUMER"
              bgColor="#DB3022"
              textColor="#FFFFFF"
              onClick={() => Navigate("/registerCustomer")}
            />
            <ButtonLogin
              title="SELLER"
              textColor="#9B9B9B"
              onClick={() => Navigate("/registerSeller")}
            />
          </div>
          <form onSubmit={handleRegister}>
            <InputLogin
              type="text"
              name="fullname"
              id="fullname"
              value={formRegister.fullname}
              placeholder="Name"
              onChange={handleChange}
            />
            <InputLogin
              type="email"
              name="email"
              id="email"
              value={formRegister.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <InputLogin
              type="password"
              name="password"
              id="password"
              value={formRegister.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <ButtonPrimary title="REGISTER" textColor="#FFFFFF" />
            <p className="content2">
              Already have a Tokopedia account?
              <Link to="/loginCustomer">
                <span>login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
  );
};

export default RegisterCustomer;
