import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <ShoppingCart />
    </div>
  );
};

export default Title;
