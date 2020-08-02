import React, { useContext, useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import { PokemonContext } from "../context/PokemonContext";
import { fetchDataFrom } from "../utils/fetchApi";

const PokemonList = () => {
  const { pokemons } = useContext(PokemonContext);
  const [pokemonState, setPokemonState] = useState([]);

  useEffect(() => {
    async function loadPokemonData() {
      await pokemons.then((data) => {
        console.log(data);
        setPokemonState(data);
      });
    }

    loadPokemonData();
  }, [pokemons]);

  console.log(pokemonState);
  return pokemonState.pokemons ? (
    <>
      {pokemonState.pokemons.map((pokemon, index) => {
        return <PokemonItem key={index} value={pokemon} />;
      })}
    </>
  ) : (
    <div>
      <p>No Pokemons to list</p>
    </div>
  );
};

export default PokemonList;
