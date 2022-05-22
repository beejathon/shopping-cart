import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
    </nav>
  );
}

export default Nav;