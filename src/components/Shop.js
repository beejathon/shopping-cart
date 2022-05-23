import React from "react";
import { useState, useEffect } from "react";


const Shop = () => {
  const [items, setItems] = useState('');

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
          <div key={item.id} className="itemCard">
            <h2>{item.name} - ${item.retailPrice}</h2>
            <img src={item.image.thumbnail} alt="" />
            <h3></h3>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Shop;