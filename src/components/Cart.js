import React, { useEffect, useState } from "react";
import CartItemDetail from "./CartItemDetail";

const Cart = ({items, removeItem}) => {
  const [cartItems, setCartItems] = useState(items);

  useEffect(() => {
    setCartItems(items)
  }, [items])

  return (
    <div className="Cart">
      <h2>Your twizted lil shopping cart</h2>
      {cartItems.map(item => (
        <CartItemDetail
          key={item.id}
          id={item.id} 
          name={item.name} 
          retailPrice={item.retailPrice}
          image={item.image.thumbnail}
          quantity={item.quantity}
          removeItem={removeItem}
        />
      ))}
    </div>
  )
}

export default Cart;