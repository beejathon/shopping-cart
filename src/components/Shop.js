import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";


const Shop = ({addItem}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
        'X-RapidAPI-Key': '501ff53544msh15a99d520ce01e0p1be6e1jsnac3f55c17b95'
      }
    };

    const response = await fetch(
      'https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10&brand=crocs', options
    )
    const data = await response.json();
    setItems(data.results)
  }

  return (
    <div className="Shop">
      <h1>Welcome to my twizted SHOP of horrorz</h1>
      <div className="itemList">
        {items.map(item => (
          <ItemCard
            key={item.id}
            id={item.id} 
            name={item.name} 
            retailPrice={item.retailPrice}
            image={item.image.thumbnail}
            addItem={addItem}
          />
        ))}
      </div>
    </div> 
  );
}

export default Shop;