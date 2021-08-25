import React from "react";
import { Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Route path="/">
      <Home />
    </Route>
  );
}

export default App;
