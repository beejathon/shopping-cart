import React from "react";

const CartItemDetail = ({id, name, retailPrice, image, quantity, subTotal, removeItem}) => {
  return (
    <div key={id} className="cart-item">
      <div className="item-info">
        <img src={image} alt="" />
        <h4>{name}</h4>       
      </div>
      <div className="item-values">
        <p>Unit Price: ${retailPrice}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {subTotal}</p>
        <button onClick={() => removeItem(id)}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CartItemDetail;