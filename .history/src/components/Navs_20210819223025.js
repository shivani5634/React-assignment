import React from "react";
import { Link } from "react-router-dom";

const Links = [
  { to: "/", text: "Home" },
  { to: "/category", text: "Category" },
  { to: "/product", text: "product" },
];

const Navs = () => {
  return (
    <div>
      <ul className="d-inline-flex justify">
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
