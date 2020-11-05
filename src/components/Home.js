import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import Pagination from './Pagination';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import { ThemeContext } from '../context/ThemeContext';
import { Container } from '../assets/Container';
import { GridParent } from '../assets/Grid';
import Loader from 'react-loader-spinner';

const Home = (props) => {
  const { isLoading, dispatch } = useContext(PokemonContext);
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
