import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import {
  PokemonWrapper,
  PokemonHeader,
  PokemonImg,
  PokemonDetailsDiv,
  Paragraph,
  PokemonDetailsContainer,
  StatsBarWrapper,
  ProgressBar,
  ProgressBarFill,
} from "../assets/PokemonDetails";
import { Card, CardSpan } from "../assets/Card";
import {
  capitalizeFirstLetter,
  getPokemonEvolutionData,
} from "../utils/helperFunctions";

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
        <PokemonDetailsContainer>
          <PokemonDetailsDiv>
            <h3>Types:</h3>
            <Paragraph>
              {location.pokemon.value.types.map((type, index) => {
                return (
                  <CardSpan key={index} type={type.type.name}>
                    {type.type.name}
                  </CardSpan>
                );
              })}
            </Paragraph>

            <Paragraph>Height: {location.pokemon.value.height}</Paragraph>
            <Paragraph>Weight: {location.pokemon.value.weight}</Paragraph>
          </PokemonDetailsDiv>
          <PokemonDetailsDiv>
            <h3>Abilities:</h3>
            {location.pokemon.value.abilities.map((value, index) => {
              return <Paragraph key={index}>{value.ability.name}</Paragraph>;
            })}
          </PokemonDetailsDiv>
          <StatsBarWrapper>
            {location.pokemon.value.stats.map((value, index) => {
              return (
                <>
                  <ProgressBar key={index}>
                    <ProgressBarFill key={index} width={value.base_stat}>
                      {" "}
                      <span>{value.stat.name}</span>
                    </ProgressBarFill>
                  </ProgressBar>
                </>
              );
            })}
          </StatsBarWrapper>
        </PokemonDetailsContainer>
      </PokemonWrapper>
    </>
  ) : (
    <Redirect to="/" />
  );
}

export default PokemonDetails;
