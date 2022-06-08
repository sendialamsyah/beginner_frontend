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
import Category from "../../pages/category/Category";

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
            <RequireAuth>
              <Home />
            </RequireAuth>
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
          path="/detailProduct"
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
          path="/profileCustomer"
          element={
            <RequireAuth>
              <ProfileCustomer />
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
          path="/category"
          element={
            <RequireAuth>
              <Category />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
