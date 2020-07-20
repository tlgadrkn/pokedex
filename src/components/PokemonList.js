import React, { useContext } from "react";
import PokemonItem from "./PokemonItem";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);
  return pokemons ? (
    <>
      {pokemons.pokemons.results.map((pokemon, index) => {
        return (
          <div className="flex flex-row">
            <PokemonItem key={index} value={pokemon} />
          </div>
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
