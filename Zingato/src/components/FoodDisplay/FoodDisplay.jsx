import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list}= useContext(StoreContext)
    //lavish
  return (
    < div className="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
              {food_list.map((item,index)=>{
                if(category==="All" || category===item.category || category==="Chinese"){
                return<FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} category={item.category} />
                }
              })}
            </div>
    </div>
  )
}

export default FoodDisplay