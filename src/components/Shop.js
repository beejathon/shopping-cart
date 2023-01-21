import { Grid, Stack, Typography } from "@mui/material";
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
    setItems(data.results);
  }

  const findItem = ({id, number}) => {
    const item = items.find((item) => item.id === id);
    addItem(item, number);
  }

  return (
    <Stack
      direction="column"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
    >
      <Typography
        variant="h4"
        sx={{
          mt: 2,
          fontFamily: 'monospace',
          fontWeight: 400,
          fontSize: { xs: 24, md: 36 },
          letterSpacing: { xs: 'none', md: '.2rem'},
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        The Croc Shop
      </Typography>
      <Grid 
        container 
        rowSpacing={2} 
        columnSpacing={{ xs: 2, sm: 2, md: 3 }} 
        columns={{ xs: 1, md: 12 }}
      >
        {items.map((item, index) => (
          <Grid item xs={3} md={4} key={index}>
            <ItemCard
              key={item.id}
              id={item.id} 
              name={item.name} 
              retailPrice={item.retailPrice}
              image={item.image.thumbnail}
              addItem={findItem}
            />
          </Grid> 
        ))}
      </Grid>
    </Stack> 
  );
}

export default Shop;