import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import { ThemeContext } from "../context/ThemeContext";
import { Container } from "../assets/Container";
import { GridParent } from "../assets/Grid";

const Home = (props) => {
  const { isLoading, dispatch } = useContext(PokemonContext);
  const { themeState } = useContext(ThemeContext);
  return !isLoading ? (
    <main>
      <Container>
        <Navbar theme={themeState} />
        <GridParent>
          <PokemonList theme={themeState} />
        </GridParent>
      </Container>
    </main>
  ) : (
    <h1>Loading Pokemon...</h1>
  );
};

export default Home;
