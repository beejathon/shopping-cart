import React from "react";
import { useState } from "react";
import '../styles/App.css';

const ItemCard = ({id, name, retailPrice, image, addItem}) => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    addItem({id, number});
    setNumber(0);
  }

  return (
    <div className="item-card">
      <div className="info">
        <img src={image} alt="" />
        <p className="name">{name}</p>
        <p className="price">${retailPrice}</p>
      </div>
            <div className="controls">
        <input 
          type ="number"
          min="0"
          value={number} 
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => handleClick()}>Add to cart</button>      
      </div>
    </div>
  );
}

export default ItemCard;