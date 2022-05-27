import React from "react";
import { useState } from "react";

const ItemCard = ({id, name, retailPrice, image, addItem}) => {
  const [number, setNumber] = useState(0);

  const handleClick = (e) => {
    addItem({id, number});
  }

  return (
    <div key={id} className="ItemCard">
      <img src={image} alt="" />
      <h2 className="itemHeader">{name}</h2>
      <p>${retailPrice}</p>
      <input 
        type ="number" 
        display={number} 
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => handleClick(id)}>Add to cart</button>
    </div>
  );
}

export default ItemCard;