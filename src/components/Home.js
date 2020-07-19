import React from "react";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <PokemonList />
    </div>
  );
};

export default Home;
