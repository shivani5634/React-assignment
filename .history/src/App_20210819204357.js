import React from "react";
import { Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/category"><Category/></Route>
  );
}

export default App;
