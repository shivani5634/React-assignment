import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import Navs from "./components/Navs";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Switch>
      <Navs>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Navs>
    </Switch>
  );
}

export default App;
