import { fetchDataFrom } from "../utils/fetchApi";
const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
const SPECIFIC_POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

export const pokemonReducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "LOAD_STATE":
      async function getPokemons(url) {
        try {
          let response = await fetchDataFrom(url);
          // console.log(response);
          // return response;
          let allPokemons = [];
          for await (let pokemon of response.results) {
            let temp = await fetchDataFrom(pokemon.url);
            allPokemons.push(temp);
          }
          console.log(allPokemons);
          return {
            pokemons: await allPokemons,
            next: await response.next,
            previous: await response.previous,
          };
        } catch (error) {
          console.log(`fetch error - ${error}`);
        }
      }
      return getPokemons(POKEMON_API).then((data) => {
        console.log(data);
        return data;
      });

    case "LOAD_MORE_POKEMONS":
      try {
        async function checkPromise() {
          let loadedState = await state;
          console.log(loadedState);

          let res = await getPokemons(loadedState.next);

          return {
            next: res.next,
            pokemons: [...loadedState.pokemons, ...res.pokemons],
            previous: res.previous,
          };
        }
        return checkPromise();
      } catch (error) {
        console.log(`promise error ${error}`);
      }
      break;

    default:
      return state;
  }
};
