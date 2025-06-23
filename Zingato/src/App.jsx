import React, { useState } from 'react'
import Navbar from './components/Navbar/Nbar'
import { Routes, Route , Navigate } from "react-router-dom";
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify.jsx'
import MyOrders from './pages/MyOrders/MyOrders.jsx';

const App = () => {
//labish
const [showLogin,setShowLogin]= useState(false)

  return (
    <div>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Navigate to="/Zingato" replace />} /> 
          <Route path="/Zingato" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders/>} />


        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App