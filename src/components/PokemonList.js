import React, { useContext, useState, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const { pokemons } = useContext(PokemonContext);
  const [pokemonState, setPokemonState] = useState([]);

  useEffect(() => {
    async function loadPokemonData() {
      await pokemons.then((data) => {
        console.log(data);
        setPokemonState(data);
        console.log(pokemonState);
      });
    }

    loadPokemonData();
  }, [pokemons]);

  // return pokemonState.pokemons ? (
  //   <>
  //     {pokemonState.pokemons.map((pokemon, index) => {
  //       return <PokemonItem key={index} value={pokemon} />;
  //     })}
  //   </>
  // ) : pokemonState.searchedPokemon ? (
  //   <PokemonItem value={pokemonState.searchedPokemon}></PokemonItem>
  // ) : (
  //   <div>
  //     <p>no pokemons to list</p>
  //   </div>
  // );
  console.log(Object.values(pokemonState));
  return pokemonState.searchedPokemon ? (
    <>
      <PokemonItem value={pokemonState.searchedPokemon}></PokemonItem>
    </>
  ) : pokemonState.pokemons ? (
    <>
      {pokemonState.pokemons.map((pokemon, index) => {
        return <PokemonItem key={index} value={pokemon} />;
      })}
    </>
  ) : (
    <p>no pokemons</p>
  );
};

export default PokemonList;
