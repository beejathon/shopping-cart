import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';
import { Container } from "@mui/material"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemTotal, setItemTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      return sum + parseInt(item.quantity)
    }, 0)

    setItemTotal(total);
  }, [cartItems])

  const onAdd = (item, number) => {
    if (number < 1) return;
    const itemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (itemInCart) updateItem(item.id, number);
    if (!itemInCart) addItem(item, number);
  };

  const updateItem = (id, number) => {
    setCartItems((prevState) => {
      const newCart = prevState.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.quantity = parseInt(cartItem.quantity) + parseInt(number);
        } 
        return cartItem;
      })
      return newCart;
    });
  }

  const addItem = (item, number) => {
    setCartItems((prevState) => {
      const newItem = item;
      newItem.quantity = number;
      const newCart = [...prevState, newItem]
      return newCart;
    })
  }

  const onRemove = (id) => {
    setCartItems((prevState) => {
      const newCart = prevState.filter((item) => item.id !== id)
      return newCart;
    })
  }

  return (
    <Container sx={{height: '100vh'}}>
      <Router>
        <Nav itemTotal={itemTotal} />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shop" element={<Shop addItem={onAdd} />} />
          <Route path="/cart" element={<Cart items={cartItems} removeItem={onRemove} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
