import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Donwload <br/> Zingato App </p>
        <div className="app-download-platforms">
            <img src={assets.pstore} alt="" />
            <img src={assets.astore} alt="" />
        </div>
    </div>
  )
}

export default AppDownload