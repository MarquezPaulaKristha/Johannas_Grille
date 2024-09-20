// App.js
import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Customer/Navbar/Navbar';
import Home from './pages/Customer/Home/Home';
import Cart from './pages/Customer/Cart/Cart';
import AddToCart from './pages/Customer/AddToCart/AddToCart';
import LoginPopUp from './pages/Customer/Login/Login';
import ConfirmOrder from './pages/Customer/ConfirmOrder/ConfirmOrder';
import Admin_LoginPopUp from './pages/Admin/Login/Login';
import Order from './pages/Admin/Orders/Order'
import Reservation from './pages/Admin/Reservation/Reservation'
// import Dashboard from './pages/Admin/Dashboard/Dashboard';
import BaseLayout from './pages/Admin/Dashboard/Dashboard';
import Product from './pages/Admin/Product/Product';
import Transaction from './pages/Admin/Transaction/Transaction'
import Profile from './pages/Admin/Profile/Profile'
import Customer from './pages/Admin/User/Users'
// import FinalizeOrder from './pages/FinalizeOrder/FinalizeOrder';

const App = () => {
  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-to-cart' element={<AddToCart />} />
          <Route path='/login' element={<LoginPopUp />} />
          <Route path='/confirm' element={<ConfirmOrder />} />
          <Route path='/admin/login' element={<Admin_LoginPopUp />} />
          <Route path='/admin/dashboard' element={<BaseLayout />} />
          <Route path='/admin/order' element={<Order />} />
          <Route path='/admin/reservation' element={<Reservation />} />
          <Route path='/admin/product' element={<Product />} />
          <Route path='/admin/transaction' element={<Transaction />} />
          <Route path='/admin/profile' element={<Profile />} />
          <Route path='/admin/customer' element={<Customer />} />
        </Routes>
      </div>
    </>
  );
};

export default App;