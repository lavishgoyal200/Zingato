import React from 'react'
// import { assets } from '../../assets/assets'
import './Header.css'
const Header = () => {
  return (
    <div className="header" >
        <div className="header-comp" >
            <h2>Order your favourite food here</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus cum quas fugit nesciunt at nobis incidunt perferendis numquam vitae. Omnis reiciendis a iusto eum nam commodi suscipit dignissimos nobis?</p>
            <button>View menu</button>
            {/* <img src={assets.banner} alt="" /> */}
        </div>
    </div>
  )
}

export default Header