import React from "react";
import '../styles/App.css';

const CartTotal = ({subtotal, shipping, total, toggleShipping}) => {
  return (
    <div className="cart-total">
      Choose your shipping:
      <label>
        <input onChange={(e) => toggleShipping(e.target.value)} type="radio" value="4.99" name="shipping" selected />     
        Standard
      </label>
      <label>
        <input onChange={(e) => toggleShipping(e.target.value)} type="radio" value="9.99" name="shipping" />
        Express
      </label>
      <label>
        <input onChange={(e) => toggleShipping(e.target.value)} type="radio" value="14.99" name="shipping" />
        Next Day
      </label>
      <ul className="total-table">
        <li>Subtotal: {subtotal}</li>
        <li>Shipping: {shipping}</li>
        <li>Total: {total}</li>
      </ul>
    </div>
  )
}

export default CartTotal