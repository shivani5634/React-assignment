import React from "react";
import ShoppingCart from "./ShoppingCart";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <ShoppingCart />
    </div>
  );
};

export default Title;
