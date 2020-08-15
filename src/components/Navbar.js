import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import {
  Nav,
  NavbarButton,
  NavbarInput,
  NavbarItems,
  NavLogo,
  NavbarLabel,
  NavbarInputGroup,
  NavbarInputButton,
} from "../assets/Nav";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  const { isLoading, dispatch } = useContext(PokemonContext);

  return (
    <Nav>
      <NavLogo>
        <h2>PokeDex</h2>
      </NavLogo>
      <NavbarItems>
        <NavbarInputGroup>
          <NavbarLabel htmlFor="search-pokemons">Search by Name:</NavbarLabel>
          <NavbarInput
            type="text"
            id="search-pokemons"
            onChange={(e) => e}
          ></NavbarInput>
          <NavbarInputButton>
            <MdSearch />
          </NavbarInputButton>
        </NavbarInputGroup>
        <NavbarButton onClick={() => dispatch({ type: "LOAD_MORE_POKEMONS" })}>
          Load More Pokemons
        </NavbarButton>
      </NavbarItems>
    </Nav>
  );
};

export default Navbar;
