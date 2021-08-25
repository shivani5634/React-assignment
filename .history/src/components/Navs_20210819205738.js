import React from "react";
import { Link } from "react-router-dom";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Navs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link to="/category">
            <Category />
          </Link>
        </li>
        <li>
          <Link to="/product">
            <Product />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navs;
