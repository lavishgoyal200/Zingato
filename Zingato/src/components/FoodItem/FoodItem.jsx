import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext';
const FoodItem = ({id,name,price,description,image}) => {

    const {cartItem,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={`${url}/images/`+image} alt="" /> 
        <hr/>
        { !cartItem[id]
           ?<img src={assets.add} className='add' onClick={()=>addToCart(id)} alt=""  />
           : <div className="food-item-counter">
            <img src={assets.minus} className="img-size" onClick={()=>removeFromCart(id)} alt=""  />
            <p>{cartItem[id]}</p>
            <img src={assets.add} className="img-size" onClick={()=> addToCart(id)} alt=""  />
           </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.star} alt=""/>
        </div>
        <p className="food-item-description" >{description}</p>
        <p className="food-item-price" >₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem