import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from './pages/checkout/checkout'
import DetailProduct from './pages/detailProduct/DetailProduct'
import Home from './pages/Home/home'
import LoginCustomer from './pages/login/loginCustomer'
import LoginSeller from './pages/login/loginSeller'
import MyBag from './pages/myBag/myBag'
import Page404 from './pages/Page404'
import ProfileCustomer from './pages/ProfileCustomer/profileCustomer'
import RegisterCustomer from './pages/Register/registerCustomer'
import RegisterSeller from './pages/Register/registerSeller'
import SellingProduct from './pages/sellingProduct/sellingProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginCustomer" element={<LoginCustomer/>}/>
        <Route path="/loginSeller" element={<LoginSeller/>}/>
        <Route path='/registerCustomer' element={<RegisterCustomer/>}/>
        <Route path='/registerSeller' element={<RegisterSeller/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/myBag' element={<MyBag/>}/>
        <Route path='/detailProduct' element={<DetailProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/profileCustomer' element={<ProfileCustomer/>}/>
        <Route path='/sellingProduct' element={<SellingProduct/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App