import React from "react";
import PropTypes from "prop-types";

const PokemonItem = ({ value }) => {
  console.log(value.name);
  return <p>{value.name}</p>;
};

PokemonItem.propTypes = {
  value: PropTypes.object,
};
export default PokemonItem;
