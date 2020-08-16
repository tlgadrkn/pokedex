import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import {
  Nav,
  NavbarButton,
  NavbarInput,
  NavbarItems,
  NavLogo,
  NavbarLabel,
  NavbarInputGroup,
  NavbarInputButton,
  NavbarForm,
} from "../assets/Nav";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
  const { isLoading, dispatch } = useContext(PokemonContext);
  const validateForm = (e) => {
    e.preventDefault();
    const value = document.querySelector("#search-pokemons");
    console.log(value.value);
    !value.value
      ? alert("please enter a pokemon name")
      : dispatch({
          type: "SEARCH_POKEMONS",
          payload: value.value.toLowerCase(),
        });
    value.value = "";
  };

  return (
    <Nav>
      <NavLogo>
        <h2>PokeDex</h2>
      </NavLogo>
      <NavbarItems>
        <NavbarForm onSubmit={(e) => validateForm(e)}>
          <NavbarInputGroup>
            <NavbarLabel htmlFor="search-pokemons">Search by Name:</NavbarLabel>
            <NavbarInput
              type="text"
              name="search-pokemons"
              id="search-pokemons"
              autoComplete="off"
              spellCheck="false"
            ></NavbarInput>
            <NavbarInputButton>
              <MdSearch />
            </NavbarInputButton>
          </NavbarInputGroup>
        </NavbarForm>
        <NavbarButton onClick={() => dispatch({ type: "LOAD_MORE_POKEMONS" })}>
          Load More Pokemons
        </NavbarButton>
      </NavbarItems>
    </Nav>
  );
};

export default Navbar;
