import React from "react";
import Navs from "./Navs";
import Title from "./Title";
import "styled-components";

import "../styles/main.scss";

// import ShoppingCart from "./ShoppingCart";

const MainPageLayout = ({ children }) => {
  return (
    <div className="bg-color">
      <span className="italic font-bolder text-white">
        <Title title="Shopping Cart" />
      </span>

      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
