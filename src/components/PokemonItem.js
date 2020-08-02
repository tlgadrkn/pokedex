import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";
import { fetchDataFrom } from "../utils/fetchApi";
import { Card, CardBody, CardImg, CardSpan } from "../assets/Card";
import { pokemonReducer } from "../reducers/pokemonReducer";

const PokemonItem = ({ value }) => {
  const { themeState } = useContext(ThemeContext);
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  console.log(value);
  // console.log(state);
  // useEffect(() => {
  //   let isMounted = true; // note this flag denote mount

  //   async function getData() {
  //     fetchDataFrom(value.url).then((data) => {
  // if (isMounted) setState(data);
  // setIsLoading(false);
  // });
  //   }
  //   getData();
  //   return () => {
  //     isMounted = false;
  //   }; // use effect cleanup to set flag false, if unmounted
  // }, []);

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
          <img src={value.sprites.front_default} alt={`${value.name}`} />
        </Link>
      </CardImg>
      <CardBody>
        <h3>{value.name}</h3>
        <p>
          {value.types.map((type, index) => (
            <CardSpan key={index}>{type.type.name}</CardSpan>
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
