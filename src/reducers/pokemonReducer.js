export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_STATE":
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};
