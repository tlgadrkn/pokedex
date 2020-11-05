import React from 'react';
import { PokemonContext } from '../context/PokemonContext';

const Pagination = (previousState) => {
  const { pokemons, dispatch } = React.useContext(PokemonContext);

  return (
    <div className='pagination'>
      <button disabled={previousState}>&laquo;</button>
      <button onClick={() => dispatch({ type: 'LOAD_MORE_POKEMONS' })}>
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
