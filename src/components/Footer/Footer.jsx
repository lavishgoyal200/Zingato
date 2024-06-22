import React from 'react'

import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='image-size' src={assets.logo} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quos dicta perferendis quasi expedita modi alias impedit dolor, aut ad possimus consequuntur quo mollitia quia, placeat distinctio voluptatibus voluptas ipsam!</p>
                <div className="footer-social-icons">
                <img src={assets.link} alt=""/>
                <img src={assets.instagram} alt=""/>
                <img src={assets.facebook} alt=""/>

                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                <li>+91-11846-11846</li>
                <li>contact@zingato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ Zingato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer