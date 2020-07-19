import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/">
        <div className="root">
          <h1 className="text-6xl">Hello from app js</h1>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
