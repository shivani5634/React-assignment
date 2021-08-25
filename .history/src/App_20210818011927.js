import React from "react";
import { Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router path="/">
      <Home />
    </Router>
  );
}

export default App;
