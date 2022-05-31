import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLogin from '../../components/base/Button/buttonLogin'
import ButtonPrimary from '../../components/base/Button/buttonPrimary'
import InputLogin from "../../components/base/Input/inputLogin";
import Logo from "../../components/base/logo";
import "../login/login.css";

const RegisterSeller = () => {
  const Navigate = useNavigate()
  return (
    <div className="warpper">
      <div>
        <Logo width='30px' height='40px' fontSize='28px'/>
      </div>
      <div className="formWarpper">
        <p className="content">Please sign up with your account</p>
        <div class="d-flex justify-content-center">
          <ButtonLogin title="COSTUMER"  textColor='#9B9B9B' onClick={() => Navigate("/registerCustomer")}/>
          <ButtonLogin title="SELLER" bgColor='#DB3022' textColor='#FFFFFF' onClick={() => Navigate("/registerSeller")}/>
        </div>
        <InputLogin type='text' placeHolder='Name'/>
        <InputLogin type='email' placeHolder='Email'/>
        <InputLogin type='number' placeHolder="Phone Number"/>
        <InputLogin type='text' placeHolder='Store Name'/>
        <InputLogin type='password' placeHolder='Password'/>
        <ButtonPrimary title="PRIMARY" textColor='#FFFFFF'/>
        <p className="content2">Already have a Tokopedia account? <span>login</span></p>
      </div>
    </div>
  );
};

export default RegisterSeller;