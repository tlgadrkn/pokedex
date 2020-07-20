import React, { useContext } from "react";
import Home from "./components/Home";
import { PokemonContextProvider } from "./context/PokemonContext";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <PokemonContextProvider>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/" render={() => <div>404 page not found...</div>} />
        </Switch>
      </PokemonContextProvider>
    </ThemeProvider>
  );
}

export default App;
