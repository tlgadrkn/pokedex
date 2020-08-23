import React, { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import {
  PokemonWrapper,
  PokemonHeader,
  PokemonImg,
  SpanButton,
  PokemonDetailsDiv,
} from "../assets/PokemonDetails";
import { Card, CardSpan } from "../assets/Card";
import { capitalizeFirstLetter } from "../utils/helperFunctions";

function PokemonDetails() {
  const location = useLocation();

  return location.pokemon ? (
    <>
      <PokemonHeader>
        <h1>{`${capitalizeFirstLetter(location.pokemon.value.name)} #${
          location.pokemon.value.id
        }`}</h1>
      </PokemonHeader>
      <PokemonWrapper>
        <PokemonImg
          src={`https://pokeres.bastionbot.org/images/pokemon/${location.pokemon.value.id}.png`}
          alt={location.pokemon.value.name}
        />

        <PokemonDetailsDiv>
          <h3>Types:</h3>
          <p>
            {location.pokemon.value.types.map((type, index) => {
              return (
                <CardSpan key={index} type={type.type.name}>
                  {type.type.name}
                </CardSpan>
              );
            })}
          </p>
          <p>Height: {location.pokemon.value.height}</p>
          <p>Weight: {location.pokemon.value.weight}</p>
        </PokemonDetailsDiv>
        <PokemonDetailsDiv>
          <h3>Abilities</h3>
          {location.pokemon.value.abilities.map((value, index) => {
            return <SpanButton key={index}>{value.ability.name}</SpanButton>;
          })}
        </PokemonDetailsDiv>
      </PokemonWrapper>
    </>
  ) : (
    <Redirect to="/" />
  );
}

export default PokemonDetails;
