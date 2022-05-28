import React, { useState } from "react";
import cartImg from '../assets/cart-outline.png'

const Cart = ({items}) => {
  const [cartItems, setCartItems] = useState(items)

  return (
    <img src={cartImg} alt="" />
  )
}

export default Cart;