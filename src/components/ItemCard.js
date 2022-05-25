import React from "react";

const ItemCard = ({id, name, retailPrice, image}) => {
  return (
    <div key={id} className="ItemCard">
      <h2 data-testid="item" className="itemHeader">
        {name} - ${retailPrice}
      </h2>
      <img src={image} alt="" />
    </div>
  );
}

export default ItemCard;