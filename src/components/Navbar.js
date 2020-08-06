import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import {
  Nav,
  NavbarButton,
  NavbarInput,
  NavbarItems,
  NavLogo,
} from "../assets/Nav";

const Navbar = () => {
  const { isLoading, dispatch } = useContext(PokemonContext);
  return (
    <Nav>
      <NavLogo>
        <h2>PokeDex</h2>
      </NavLogo>
      <NavbarItems>
        <NavbarInput
          type="text"
          name="search-pokemons"
          placeholder="Search Pokemons..."
        ></NavbarInput>
        <NavbarButton onClick={() => dispatch({ type: "LOAD_MORE_POKEMONS" })}>
          Load More Pokemons
        </NavbarButton>
      </NavbarItems>
    </Nav>
  );
};

export default Navbar;
