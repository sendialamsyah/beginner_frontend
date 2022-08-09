import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Checkout from "../../pages/checkout/checkout";
import DetailProduct from "../../pages/detailProduct/DetailProduct";
import Home from "../../pages/Home/homes";
import LoginCustomer from "../../pages/auth/login/loginCustomer";
import LoginSeller from "../../pages/auth/login/loginSeller";
import MyBag from "../../pages/myBag/myBag";
import Page404 from "../../pages/Page404";
import ProfileCustomer from "../../pages/ProfileCustomer/profileCustomer";
import RegisterCustomer from "../../pages/auth/Register/registerCustomer";
import RegisterSeller from "../../pages/auth/Register/registerSeller";
import SellingProduct from "../../pages/sellingProduct/sellingProduct";
import RequireAuth from "../../components/base/requireAuth/requireAuth";
import EditProduct from '../../pages/editProduct/editProduct'
import ProfileSeller from "../../pages/ProfileSeller/profileSeller";
import MyProduct from "../../pages/MyProduct/myProduct";
import MyOrder from "../../pages/MyOrder/myOrder";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginCustomer" element={<LoginCustomer />} />
        <Route path="/loginSeller" element={<LoginSeller />} />
        <Route path="/registerCustomer" element={<RegisterCustomer />} />
        <Route path="/registerSeller" element={<RegisterSeller />} />
        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route
          path="/home"
          element={
              <Home />
          }
        />
        <Route
          path="/myBag"
          element={
            <RequireAuth>
              <MyBag />
            </RequireAuth>
          }
        />
        <Route
          path="/detailProduct/:id"
          element={
            <RequireAuth>
              <DetailProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/myOrder"
          element={
            <RequireAuth>
              <MyOrder />
            </RequireAuth>
          }
        />
        <Route
          path="/profileCustomer"
          element={
            <RequireAuth>
              <ProfileCustomer />
            </RequireAuth>
          }
        />
        <Route
          path="/profileSeller"
          element={
            <RequireAuth>
              <ProfileSeller />
            </RequireAuth>
          }
        />
        <Route
          path="/sellingProduct"
          element={
            <RequireAuth>
              <SellingProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/myProduct"
          element={<MyProduct/> } />
        <Route path="/editProduct/:id" element={ <EditProduct/>  }/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
