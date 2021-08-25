import React from "react";
import Navs from "./Navs";
import Title from "./Title";
import "../styles/main.scss";
// import ShoppingCart from "./ShoppingCart";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Shopping Cart" />

      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
