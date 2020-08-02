import React from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, CardImg, CardSpan } from "../assets/Card";

function PokemonDetails() {
  const location = useLocation();
  console.log(location.pokemon.value);
  return (
    <Card>
      <h1>{`${location.pokemon.value.name} #${location.pokemon.value.id}`}</h1>
      <img
        style={{ height: "200px", width: "200px" }}
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
          return <span key={index}>{value.ability.name}</span>;
        })}
      </div>
    </Card>
  );
}

export default PokemonDetails;
