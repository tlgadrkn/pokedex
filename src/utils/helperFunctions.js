import { fetchDataFrom } from "./fetchApi";

export const capitalizeFirstLetter = (textToCapitalize) => {
  const firstLetter = textToCapitalize.charAt(0).toUpperCase();
  return textToCapitalize.replace(firstLetter.toLowerCase(), firstLetter);
};

export const setSpanColor = (pokemonType) => {
  const backgroundColors = {
    grass: "#73C6B6 ",
    bug: "#444",
    fire: "#C0392B",
    poison: "#8E44AD",
    flying: "#AED6F1",
    water: "#3498DB",
    electric: "#F4D03F ",
    normal: "#BFC9CA ",
    ground: "#A04000",
    fairy: "#F5B7B1",
    fighting: "#212F3C",
    rock: "#ABB2B9",
    psychic: "#148F77",
    ice: "#2980B9",
    steel: "#797D7F",
    ghost: "#ECF0F1 ",
    dragon: "#B03A2E",
  };
  if (!Object.keys(pokemonType)) return "#333";
  return backgroundColors[pokemonType];
};
