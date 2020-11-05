import React, { useContext, useState, useEffect } from 'react';
import PokemonItem from './PokemonItem';
import { PokemonContext } from '../context/PokemonContext';
import Pagination from './Pagination';

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
  }, [pokemonState, pokemons]);
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
      <Pagination
        previousState={pokemonState.pokemons.previous ? false : true}
      />
    </>
  ) : (
    <p>Loading Pokemons...</p>
  );
};

export default PokemonList;
