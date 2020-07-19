import React from "react";
import Home from "./components/Home";
import { PokemonContextProvider } from "./context/PokemonContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <PokemonContextProvider>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </PokemonContextProvider>
  );
}

export default App;
