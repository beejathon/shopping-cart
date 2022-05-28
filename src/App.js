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
      return sum + parseInt(item.number)
    }, 0)

    setItemTotal(total);
  }, [cartItems])

  const onAdd = ({id, number}) => {
    if (number < 1) return;
    const itemInCart = cartItems.some((item) => item.id === id);

    if (itemInCart) updateItem({id, number});
    if (!itemInCart) addItem({id, number});
  };

  const updateItem = ({id, number}) => {
    setCartItems((prevState) => {
      const newCart = prevState.map((item) => {
        if (item.id === id) item.number = parseInt(item.number) + parseInt(number);
        return item;
      })
      return newCart;
    });
  }

  const addItem = ({id, number}) => {
    setCartItems((prevState) => {
      const newCart = [...prevState, {id, number}]
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
          <Route path="/cart" element={<Cart items={cartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
