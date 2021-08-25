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
import Navs from "./components/Navs";
// import PublicRoute from "./components/PublicRoute";
// import SlideShow from "./components/SlideShow";

function App() {
  return (
    <Switch>
      <div>
        <Navs />
      </div>
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
  );
}

export default App;
