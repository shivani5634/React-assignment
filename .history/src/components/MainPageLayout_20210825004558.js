import React from "react";
import Navs from "./Navs";
import Title from "./Title";

import "../styles/main.scss";

// import ShoppingCart from "./ShoppingCart";

const MainPageLayout = ({ children }) => {
  return (
    <div className="bg-color">
      <span className="italic font-bolder text-green">
        <Title title="Shopping Cart" className="bg-color" />
      </span>

      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
