import React from 'react'
// import { assets } from '../../assets/assets'
import './Header.css'
const Header = () => {
  return (
    <div className="header" >
        <div className="header-comp" >
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button>View menu</button>
            {/* <img src={assets.banner} alt="" /> */}
        </div>
    </div>
  )
}

export default Header