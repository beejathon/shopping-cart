import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const CartItemDetail = ({id, name, retailPrice, image, quantity, subTotal, removeItem}) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Stack 
        direction={{ xs: "column", md: "row" }}
        spacing={0}
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <CardMedia
          sx={{ width: { xs: 150, md: 200 }}}
          component="img"
          alt="shoe"
          height="auto"
          image={image}
        />
        <CardContent>
          <Typography variant={{ xs: "h6", md: "h5" }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Unit Price: ${retailPrice}</p>
            <p>Quantity: {quantity}</p>
            <p>Sub-total: ${subTotal}</p>
          </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: "column" }}>
          <Button variant="outlined" onClick={() => removeItem(id)}>
            Remove from cart
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
}

export default CartItemDetail;