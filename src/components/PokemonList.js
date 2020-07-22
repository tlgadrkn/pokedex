import React, { useContext } from "react";
import PokemonItem from "./PokemonItem";
import { PokemonContext } from "../context/PokemonContext";
import { Grid } from "@material-ui/core";

const PokemonList = () => {
  const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);
  return pokemons ? (
    <>
      {pokemons.pokemons.results.map((pokemon, index) => {
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <PokemonItem key={index} value={pokemon} />
          </Grid>
        );
      })}
    </>
  ) : (
    <div>
      <p>No Pokemons to list</p>
    </div>
  );
};

export default PokemonList;
