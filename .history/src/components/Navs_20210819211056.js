import React from "react";
import { Link } from "react-router-dom";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Links = [
  { to: "/", text: "Home" },
  { to: "/category", text: "Category" },
  { to: "/product", text: "product" },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {Links.map((items) => (
          <li key={items.to}>
            <Link to={items.to}>{items.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
