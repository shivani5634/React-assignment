import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import "./styles/main.scss";
import "styled-components";

import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";
// import Navs from "./components/Navs";
// import { Nav } from "rsuite";
// import Navs from "./components/Navs";

function App() {
  return (
    <div>
      {/* <Navs /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
