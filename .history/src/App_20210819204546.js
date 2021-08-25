import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/category">
        <Category />
      </Route>
    </Switch>
  );
}

export default App;
