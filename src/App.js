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

  useEffect(() => {
    
  }, [cartItems])

  const onAdd = ({id, number}) => {
    const itemInCart = cartItems.includes(id);

    if (itemInCart) { 
      updateItem({id, number});
    } else {
      addItem({id, number});
    }
  };

  const updateItem = ({id, number}) => {
    setCartItems((prevState) => {
      const newCart = prevState.map((item) => {
        if (item.id === id) item.number += number;
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
        <Nav>
          <Cart items={cartItems} />
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addItem={onAdd}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
