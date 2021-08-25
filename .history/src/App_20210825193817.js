import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import "./styles/main.scss";
import "styled-components";

import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { CartProvider } from "./context/cart.context";
import { Navbar } from "reactstrap";
import Checkout from "./components/Checkout";
import CategoryContainer from "./pages/FilterPage";
import ManageCategory from "./pages/ManageCategory";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category/:id">
          <Category />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/category/:id">
          <CategoryContainer />
        </Route>
        <Route exact path="/checkout">
          <ManageCategory />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
