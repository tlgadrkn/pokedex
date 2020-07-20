import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";
import { fetchDataFrom } from "../utils/fetchApi";

const PokemonItem = ({ value }) => {
  const { themeState } = useContext(ThemeContext);
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    async function getData() {
      fetchDataFrom(value.url).then((data) => {
        if (isMounted) setState(data);
        setIsLoading(false);
      });
    }
    getData();
    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="container mx-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-50 mx-auto"
          src={state.sprites.front_shiny}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{state.name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

PokemonItem.propTypes = {
  value: PropTypes.object,
};
export default PokemonItem;
