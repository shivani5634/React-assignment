import React from "react";
import "../styles/main.scss";

// import { Link } from "react-router-dom";
// import { Home, LinkSharp } from "@material-ui/icons";

const Links = [
  { to: "/", text: "Home" },
  { to: "/category", text: "Category" },
  { to: "/product", text: "product" },
];

const Navs = () => {
  return (
    <div>
      <ul className="text-center link-unstyled">
        {Links.map((items) => (
          <li key={items.to}>
            <Links to={items.to}>{items.text}</Links>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
