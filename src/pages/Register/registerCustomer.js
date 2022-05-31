import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from "../../components/base/Button/buttonLogin";
import ButtonPrimary from "../../components/base/Button/buttonPrimary";
import InputLogin from "../../components/base/Input/inputLogin";
import Logo from "../../components/base/logo";
import "../login/login.css";

const RegisterCustomer = () => {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const handleChange = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault()
  };

  const Navigate = useNavigate()

  return (
    <form onSubmit={handleRegister}>
    <div className="warpper">
      <div>
        <Logo width="30px" height="40px" fontSize="28px" />
      </div>
      <div className="formWarpper">
        <p className="content">Please sign up with your account</p>
        <div class="d-flex justify-content-center">
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
        <InputLogin
          type="text"
          name="fullname"
          value={dataRegister.fullname}
          placeHolder="Name"
          onChange={handleChange}
        />
        <InputLogin
          type="email"
          name="email"
          value={dataRegister.email}
          placeHolder="Email"
          onChange={handleChange}
        />
        <InputLogin
          type="password"
          name="password"
          value={dataRegister.password}
          placeHolder="Password"
          onChange={handleChange}
        />
        <ButtonPrimary title="PRIMARY" textColor="#FFFFFF"/>
        <p className="content2">
          Already have a Tokopedia account? <span>login</span>
        </p>
      </div>
    </div>
    </form>
  );
};

export default RegisterCustomer;
