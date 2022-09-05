import React, { useEffect, useState } from "react";
import CartItemDetail from "./CartItemDetail";
import CartTotal from "./CartTotal";

const Cart = ({items, removeItem}) => {
  const [cartItems, setCartItems] = useState(items);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(4.99);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartItems(items);
  }, [items])

  useEffect(() => {
    subTotalItems();
    const subTotal = cartItems.reduce((sum, item) => {
      return sum + parseInt(item.subTotal)
    }, 0)
    setSubTotal(parseFloat(subTotal).toFixed(2));
    const total = subTotal + parseFloat(shipping);
    setTotal(total);
  }, [cartItems, shipping])

  const toggleShipping = (value) => {
    setShipping(value);
  }

  const subTotalItems = () => {
    setCartItems((prevState) => {
      const newCart = prevState.map((item) => {
        const quantity = parseInt(item.quantity);
        const price = parseInt(item.retailPrice);
        item.subTotal = parseFloat(quantity * price).toFixed(2);
        return item;
      })
      return newCart;
    })
  }

  return (
    <div className="Cart">
      <h2>Your twizted lil shopping cart</h2>
      <div className="cart-table">
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItemDetail
              key={item.id}
              id={item.id} 
              name={item.name} 
              retailPrice={item.retailPrice}
              image={item.image.thumbnail}
              quantity={item.quantity}
              subTotal={item.subTotal}
              removeItem={removeItem}
            />
          ))}
        </div>
        <CartTotal 
          subtotal={subTotal} 
          shipping={shipping}
          total={total}
          toggleShipping={toggleShipping}
        />
      </div>
    </div>
  )
}

export default Cart;