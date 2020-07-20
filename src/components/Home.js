import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import { ThemeContext } from "../context/ThemeContext";
const Home = (props) => {
  const { isLoading } = useContext(PokemonContext);
  const { themeState } = useContext(ThemeContext);
  return !isLoading ? (
    <div className="container mx-auto">
      <Navbar theme={themeState} />
      <div className="flex flex-row flex-wrap">
        <PokemonList theme={themeState} />
      </div>
    </div>
  ) : (
    <h1>Loading Pokemons...</h1>
  );
};

export default Home;
