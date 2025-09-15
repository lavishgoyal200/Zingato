import { createContext, useEffect, useState } from "react"
import axios from 'axios';

export const StoreContext = createContext(null)

export const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({})
  const url = "https://zingato-nsjf.onrender.com" 
  // const url = "http://localhost:3000"

  const [token, setToken] = useState("");
  const [food_list, setFood_list] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
    }
  }

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
    }
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }
    return totalAmount;
  }

  const fetchFoodlist = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFood_list(response.data.data || []);
    } catch (err) {
      console.error("Error fetching food list:", err);
      setFood_list([]);
    }
  }

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      setCartItem(response.data.cartData || {});  // ✅ always fallback to {}
    } catch (err) {
      console.error("Error loading cart data:", err);
      setCartItem({});
    }
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodlist();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, [])

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}
