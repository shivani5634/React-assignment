import React from "react";
import "../styles/main.scss";

import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
// import { Home, LinkSharp } from "@material-ui/icons";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/category/:categoryId", text: "Category" },
  { to: "/product/:productId", text: "Product" },
];

const Navs = () => {
  return (
    <div className="position-sticky">
      <ul className="font-huge">
        {LINKS.map((items) => (
          <li key={items.to}>
            <Link to={items.to}>{items.text}</Link>
          </li>
        ))}
        <ShoppingCart />
      </ul>
    </div>
  );
};

export default Navs;
