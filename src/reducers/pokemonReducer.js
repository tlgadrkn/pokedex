export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_POKEMONS":
      console.log("filtered pokemons");
      break;

    default:
      return state;
  }
};
