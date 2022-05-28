import './styles/App.css';
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

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemTotal, setItemTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      return sum + parseInt(item.quantity)
    }, 0)

    setItemTotal(total);
  }, [cartItems])

  const onAdd = (item) => {
    if (item.quantity < 1) return;
    const itemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (itemInCart) updateItem(item);
    if (!itemInCart) addItem(item);
  };

  const updateItem = (item) => {
    setCartItems((prevState) => {
      const newCart = prevState.map((cartItem) => {
        if (cartItem.id === item.id) cartItem.quantity = item.quantity + cartItem.quantity;
        return cartItem;
      })
      return newCart;
    });
  }

  const addItem = (item) => {
    setCartItems((prevState) => {
      const newCart = [...prevState, item]
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
    <div className='App'>
      <Router>
        <Nav itemTotal={itemTotal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addItem={onAdd} />} />
          <Route path="/cart" element={<Cart items={cartItems} removeItem={onRemove} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
