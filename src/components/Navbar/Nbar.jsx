import React , {useContext, useState} from 'react'
import './Nbar.css'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext.jsx';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState("Home");

  const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className="navbar">
        <Link to ='/Zingato'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className ='navbar-menu'>
          <Link to='/Zingato' onClick={() => setMenu("Home")} className={ menu==="Home" ? "active" : " "}>Home</Link>
          <a href='#explore-menu' onClick={() => setMenu("Menu")} className={ menu==="Menu" ? "active" : " "}>Menu</a>
          <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={ menu==="Mobile-app" ? "active" : " "}>Mobile-app</a>
          <a href='#footer' onClick={() => setMenu("Contact-us")} className={ menu==="Contact-us" ? "active" : " "}>Contact us</a>
        </ul>
        <div className= "navbar-right">
          <img className="IMAGE" src={assets.search} alt=""/>
          <div className="navbar-search">
            <Link to='/cart'><img className="IMAGE" src={assets.basket} alt=""/></Link>
            <div className={ !getTotalCartAmount()?"":"dot" }></div>
          </div>
          <button onClick={() => setShowLogin(true)} >Sign in</button>
        </div>
    </div>
  )
}

export default Navbar