import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Nav } from "../assets/Nav";

const Navbar = () => {
  const { isLoading, dispatch } = useContext(PokemonContext);
  return (
    <Nav>
      <h2>PokeDex</h2>
      <button onClick={() => dispatch({ type: "LOAD_MORE_POKEMONS" })}>
        Load More Pokemons
      </button>
      <input type="text" placeholder="Search Pokemons..."></input>
    </Nav>
  );
};

export default Navbar;
