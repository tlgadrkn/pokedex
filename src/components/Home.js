import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import Pagination from './Pagination';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import { ThemeContext } from '../context/ThemeContext';
import { Container } from '../assets/Container';
import { GridParent } from '../assets/Grid';
import Loader from 'react-loader-spinner';
import { useAsync } from '../customHooks/useAsync';
import { fetchDataFrom } from '../utils/fetchApi';
const Home = (props) => {
  const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';

  const { isLoading, dispatch } = useContext(PokemonContext);
  const state = useAsync(() => {
    if (!isLoading) {
      return;
    }
    return fetchDataFrom(POKEMON_API);
  });
  console.log('state', state);
  console.log(isLoading);

  const { themeState } = useContext(ThemeContext);
  return !isLoading ? (
    <main>
      <Container>
        <Navbar theme={themeState} />
        <GridParent>
          <PokemonList theme={themeState} />
        </GridParent>
      </Container>
    </main>
  ) : (
    <>
      <h1>Loading Pokemon...</h1>
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type='ThreeDots' color='#2BAD60' height='100' width='100' />
      </div>
    </>
  );
};

export default Home;
