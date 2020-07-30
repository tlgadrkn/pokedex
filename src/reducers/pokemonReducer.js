import { fetchDataFrom } from "../utils/fetchApi";
const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

export const pokemonReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOAD_STATE":
      async function getPokemons() {
        try {
          let response = await fetchDataFrom(POKEMON_API);
          // console.log(response);
          // return response;
          let allPokemons = [];
          for await (let pokemon of response.results) {
            let temp = await fetchDataFrom(pokemon.url);
            allPokemons.push(temp);
          }
          console.log(allPokemons);
          return allPokemons;
        } catch (error) {
          console.log(`fetch error - ${error}`);
        }
      }
      return getPokemons().then((data) => {
        console.log(data);
        return {
          ...state,
          pokemons: data,
        };
      });
    // return {
    //   ...state,
    //   pokemons: getPokemons(),
    // };

    // return {
    //   ...state,
    //   pokemons: action.payload,
    // };
    case "LOAD_MORE_POKEMONS":
      // console.log({ ...state.pokemons, results: [...state.pokemons.results] });

      return fetchDataFrom(state.pokemons.next).then((data) => {
        console.log(data.results);
        console.log({ ...state });
        const fetchedPokemons = data.results.map((pokemon) => {
          return {
            name: pokemon.name,
            url: pokemon.url,
          };
        });
        return {
          ...state,
          pokemons: [...state.pokemons.results, data.results],
        };
      });
    default:
      return state;
  }
};
