import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import { ThemeContext } from "../context/ThemeContext";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

const Home = (props) => {
  const { isLoading } = useContext(PokemonContext);
  const { themeState } = useContext(ThemeContext);
  return !isLoading ? (
    <Grid container direction="row" justify="center" alignItems="center">
      <Navbar theme={themeState} />
      {/* <Pagination /> */}
      <PokemonList theme={themeState} />
    </Grid>
  ) : (
    <h1>Loading Pokemons...</h1>
  );
};

export default Home;
