import React , {Profiler, useContext, useState} from 'react'
import './Nbar.css'
import { assets } from '../../assets/assets.js'
import { Link, useNavigate,BrowserRouter } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext.jsx';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState("Home");

  const {getTotalCartAmount,token,setToken}=useContext(StoreContext);

  const navigate= useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/zingato/");

  }

  return (
    <div className="navbar">
        <Link to ='/Zingato'><img src={assets.logo1} alt="" className="logo" /></Link>
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
          {!token? <button onClick={() => setShowLogin(true)} >Sign in</button> 
          : <div className='navbar-profile'>
            <img className='img_profile' src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown' >
              <li onClick={()=> navigate('/myorders')} ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr/>
              <li onClick={logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
            </div>}
        </div>
    </div>
  )
}

export default Navbar