import React, { useContext } from "react";
import { PokemonContext, dispatch } from "../context/PokemonContext";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
import { Container } from "../assets/Container";
import { GridParent } from "../assets/Grid";

const Home = (props) => {
  const { isLoading } = useContext(PokemonContext);
  const { themeState } = useContext(ThemeContext);
  return !isLoading ? (
    <Container>
      <Navbar theme={themeState} />
      <GridParent>
        <PokemonList theme={themeState} />
      </GridParent>
      {/* <button onClick={() => dispatch({type:"LOAD_MORE", payload:})}>Load More Pokemons</button> */}
    </Container>
  ) : (
    <h1>Loading Pokemon...</h1>
  );
};

export default Home;
