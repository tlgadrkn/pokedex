import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PokemonWrapper,
  PokemonHeader,
  PokemonImg,
  SpanButton,
} from "../assets/PokemonDetails";

function PokemonDetails() {
  const location = useLocation();

  return (
    <>
      <PokemonHeader>
        <h1>{`${location.pokemon.value.name} #${location.pokemon.value.id}`}</h1>
      </PokemonHeader>
      <PokemonWrapper>
        <PokemonImg
          src={`https://pokeres.bastionbot.org/images/pokemon/${location.pokemon.value.id}.png`}
          alt=""
        />

        <div className="pokemon-details">
          <p>
            Types:{" "}
            {location.pokemon.value.types.map((type, index) => {
              return <span key={index}>{type.type.name}</span>;
            })}
          </p>
          <p>Height: {location.pokemon.value.height}</p>
          <p>Weight: {location.pokemon.value.weight}</p>
        </div>

        <div className="abilities-section">
          <h3>Abilities</h3>
          {location.pokemon.value.abilities.map((value, index) => {
            return <SpanButton key={index}>{value.ability.name}</SpanButton>;
          })}
        </div>
      </PokemonWrapper>
    </>
  );
}

export default PokemonDetails;
