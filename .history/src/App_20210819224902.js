import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
// import Navs from "./components/Navs";
import "rsuite/dist/styles/rsuite-default.css";
import "./styles/main.scss";
// import ShoppingCart from "./components/ShoppingCart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Switch>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
      <div>
        <Route exact path="/category">
          <Category />
        </Route>
      </div>
      <div>
        <Route exact path="/product">
          <Product />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
