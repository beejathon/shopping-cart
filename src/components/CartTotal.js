import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CartTotal = ({ subtotal, shipping, total, toggleShipping }) => {
  const [open, setOpen] = useState(false)
  
  const handleChange = (e) => {
    toggleShipping(e.target.value)
  }

  const checkout = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        CLOSE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
  return (
    <Stack
      direction="column"
      spacing={1}
      py={3}
    >
      <FormControl>
        <FormLabel>Choose your shipping:</FormLabel>
        <RadioGroup 
          onChange={handleChange}
          defaultValue="4.99"
        >
          <FormControlLabel value="4.99" control={<Radio />} label="Standard" />
          <FormControlLabel value="9.99" control={<Radio />} label="Express" />
          <FormControlLabel value="14.99" control={<Radio />} label="Next Day" />
        </RadioGroup>
      </FormControl>
      <Typography
        gutterBottom
        component="div"
        sx={{
          fontWeight: 100,
          fontSize: { xs: 18, md: 20 },
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          <li>Subtotal: {subtotal}</li>
          <li>Shipping: {shipping}</li>
          <li>Total: {total}</li>
        </ul>
      </Typography>
      <Button variant="contained" onClick={checkout}>
        Checkout
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Feature coming soon"
        action={action}
      />
    </Stack>
  )
}

export default CartTotal