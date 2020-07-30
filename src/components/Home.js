import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import { Container } from "../assets/Container";
import { GridParent } from "../assets/Grid";

const Home = (props) => {
  const { isLoading, dispatch } = useContext(PokemonContext);
  const { themeState } = useContext(ThemeContext);
  return !isLoading ? (
    <Container>
      <Navbar theme={themeState} />
      <button onClick={() => dispatch({ type: "LOAD_MORE_POKEMONS" })}>
        Load More Pokemons
      </button>
      <GridParent>
        <PokemonList theme={themeState} />
      </GridParent>
    </Container>
  ) : (
    <h1>Loading Pokemon...</h1>
  );
};

export default Home;
