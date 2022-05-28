import React from "react";

const CartItemDetail = ({id, name, retailPrice, image, quantity, removeItem}) => {
  return (
    <div key={id} className="ItemCard">
      <img src={image} alt="" />
      <h2 className="itemHeader">{name}</h2>
      <p>${retailPrice}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => removeItem(id)}>Remove from cart</button>
    </div>
  );
}

export default CartItemDetail;