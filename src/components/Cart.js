import { Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartItemDetail from "./CartItemDetail";
import CartTotal from "./CartTotal";

const Cart = ({items, removeItem}) => {
  const [cartItems, setCartItems] = useState(items);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(4.99);
  const [total, setTotal] = useState(0);

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
        Checkout
      </Typography>
      <Grid 
        container 
        rowSpacing={2} 
        direction="column"
        columns={1}
      >
        {cartItems.map(item => (
          <Grid item xs={1} sx={{ maxWidth: "100%" }}>
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
          </Grid>
        ))}
      </Grid>
      <CartTotal 
        subtotal={subTotal} 
        shipping={shipping}
        total={total}
        toggleShipping={toggleShipping}
      />
    </Stack>
  )
}

export default Cart;