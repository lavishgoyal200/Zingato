import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
    
    const [image,setImage]= useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Burger"
    })

    const onChangeHandler =(event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const onSubmitHandler=async (event) => {
        event.preventDefault();
        const formData =new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Burger"
            })
            setImage(false);
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);
        }
    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className='add-img-upload flex-col'>
                <p>Upload</p>
                <label htmlFor='image'>
                    <img src={image ? URL.createObjectURL(image) :assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required />
            </div>
            <div className='add-product-name flex-col'>
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' />
            </div>
            <div className='add-product-description flex-col'>
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required ></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={onChangeHandler} name="category" >
                        <option value="Burger">Burger</option>
                        <option value="Meal">Meal</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Sweet">Sweet</option>
                        <option value="Roll">Roll</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-button' >ADD</button>
        </form>
      
    </div>
  )
}

export default Add
