import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogin from "../../../components/base/Button/buttonLogin";
import ButtonPrimary from "../../../components/base/Button/buttonPrimary";
import InputLogin from "../../../components/base/Input/inputLogin";
import Logo from "../../../components/base/logo";
import { registerUser } from "../../../configs/redux/actions/userAction";
import "../login/login.css";

const RegisterSeller = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [formRegister, setFormRegister] = useState({
    role: "seller",
    email: "",
    password: "",
    fullname: "",
    phone_number: "",
    store_name: "",
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
            textColor="#9B9B9B"
            onClick={() => Navigate("/registerCustomer")}
          />
          <ButtonLogin
            title="SELLER"
            bgColor="#DB3022"
            textColor="#FFFFFF"
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
            onChange={handleChange}
            placeHolder="Email"
          />
          <InputLogin
            type="phone_number"
            name="phone_number"
            id="phone_number"
            value={formRegister.phone_number}
            onChange={handleChange}
            placeHolder="Phone Number"
          />
          <InputLogin
            type="text"
            name="store_name"
            id="store_name"
            value={formRegister.store_name}
            onChange={handleChange}
            placeHolder="Store Name"
          />
          <InputLogin
            type="password"
            name="password"
            id="password"
            value={formRegister.password}
            onChange={handleChange}
            placeHolder="Password"
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

export default RegisterSeller;
