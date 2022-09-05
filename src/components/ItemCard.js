import React from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";

const ItemCard = ({id, name, retailPrice, image, addItem}) => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    addItem({id, number});
    setNumber(0);
  }

  return (
    <Card sx={{ height: '100%', maxWidth: 350 }}>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <CardMedia
          sx={{ width: { xs: 200, md: 250, lg: 300 }}}
          component="img"
          alt="shoe"
          height="auto"
          image={image}
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant={{ xs: 'h1', md: 'h5' }} 
            component="div"
            sx={{
              fontFamily: 'inherit',
              fontWeight: 200,
              fontSize: { xs: 16, md: 18 },
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {name}
          </Typography>
          <Typography variant="body4" color="text.secondary">
            ${retailPrice}
          </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: "column" }}>
          <input 
            type ="number"
            min="0"
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button sx={{ my: 2 }} size="small" variant="contained" onClick={() => handleClick()}>Add</Button>
        </CardActions>
      </Stack>
    </Card>
  );
}

export default ItemCard;