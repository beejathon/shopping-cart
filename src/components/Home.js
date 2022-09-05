import React from "react";
import crocguy from '../assets/crocguy.webp'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my twizted HOME of Horrorz</h1>
      <img src={crocguy} alt="croc guy" />
    </div>
  );
}

export default Home;