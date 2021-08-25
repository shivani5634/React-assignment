import React from "react";
import "../styles/main.scss";

import { Link } from "react-router-dom";
// import { Home, LinkSharp } from "@material-ui/icons";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/category", text: "Category" },
  { to: "/product", text: "product" },
];

const Navs = () => {
  return (
    <div>
      <ul className="text-center link-unstyled">
        
          {LINKS.map((items) => (
            <li key={items.to}>
              <Link to={items.to}>{items.text}</Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Navs;
