import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";
import { capitalizeFirstLetter } from "../utils/helperFunctions";
import { Card, CardBody, CardImg, CardSpan, CardHeader } from "../assets/Card";
import { pokemonReducer } from "../reducers/pokemonReducer";

const PokemonItem = ({ value }) => {
  const { themeState } = useContext(ThemeContext);
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  // console.log(value);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <Card>
      <CardImg>
        <Link
          to={{
            pathname: `/${value.id}`,
            pokemon: { value },
          }}
        >
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${value.id}.png`}
            alt={value.name}
          />

          {/* <img src={value.sprites.front_default} alt={`${value.name}`} /> */}
        </Link>
      </CardImg>
      <CardBody>
        <CardHeader>{capitalizeFirstLetter(value.name)}</CardHeader>
        <p>
          {value.types.map((type, index) => (
            <CardSpan key={index} type={type.type.name}>
              {type.type.name}
            </CardSpan>
          ))}
        </p>
      </CardBody>
    </Card>
  );
};

PokemonItem.propTypes = {
  value: PropTypes.object,
};
export default PokemonItem;
