import React, { useContext } from "react";
import Home from "./components/Home";
import { PokemonContextProvider } from "./context/PokemonContext";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { Container } from "./assets/Container";
import { GlobalStyle } from "./assets/Global";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <ThemeProvider>
      <PokemonContextProvider>
        <GlobalStyle />
        <Switch>
          <Container>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              path="/:id"
              render={(props) => <PokemonDetails {...props} />}
            />
          </Container>
        </Switch>
      </PokemonContextProvider>
    </ThemeProvider>
  );
}

export default App;
