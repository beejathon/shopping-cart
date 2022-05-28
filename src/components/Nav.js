import React from "react";
import { Link } from "react-router-dom";
import cartImg from '../assets/cart-outline.png'
import '../styles/App.css';

const Nav = ({itemTotal}) => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <div className="cartButton">
        <Link to='/cart'><img src={cartImg} alt="" /></Link>
        <div className="overlay">{itemTotal}</div>
      </div>
    </nav>
  );
}

export default Nav;