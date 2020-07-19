import React, { useReducer, useContext, createContext } from "react";
import PokemonReducer from "../reducers/pokemonReducer";

export const PokemonContext = createContext(null);

export const PokemonContextProvider = ({ children }) => {
  const initialState = null;
  const [pokemons, dispatch] = useReducer(PokemonReducer, []);

  return (
    <PokemonContext.Provider value={{ pokemons, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
