import React, { useReducer, useEffect, createContext, useState } from "react";
import { pokemonReducer } from "../reducers/pokemonReducer";
import { fetchDataFrom } from "../utils/fetchApi";
const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

export const PokemonContext = createContext(null);

export const PokemonContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tempPokemons, setTempPokemons] = useState([]);
  const [pokemons, dispatch] = useReducer(
    pokemonReducer,
    useEffect(() => {
      try {
        fetchDataFrom(POKEMON_API).then((value) => {
          dispatch({ type: "LOAD_STATE", payload: value });
          setIsLoading(false);
        });
      } catch (error) {
        throw new Error(`Fetch Error - ${error}`);
      }
    }, [])
  );
  return (
    <PokemonContext.Provider value={{ isLoading, pokemons, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
