export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_STATE":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "LOAD_MORE_POKEMONS":
      return {
        ...state,
      };
    default:
      return state;
  }
};
