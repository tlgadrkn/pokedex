import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
const Home = () => {
  const { isLoading } = useContext(PokemonContext);
  return !isLoading ? (
    <div className="container mx-auto">
      <Navbar />
      <PokemonList />
    </div>
  ) : (
    <h1>Loading Pokemons...</h1>
  );
};

export default Home;
