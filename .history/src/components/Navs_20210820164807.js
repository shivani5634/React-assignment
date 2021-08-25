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
      <ul className="d-flex justify-content mt-3  active">
        {Links.map((items) => (
          <li key={items.to}>
            <Link to={items.to}>
              {items.text}
              <br />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
