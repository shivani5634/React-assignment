/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

import ProductJsonArray from "../data/products.json";
const Product = () => {
  const [products, setProduct] = useState(ProductJsonArray);
  return (
    <MainPageLayout>
      {products.map((item, index) => {
        return (
          <a className="text-center" href={item.id}>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h3>{item.currency}</h3>
            <img src={item.thumbnail} alt className="keyboard" height="250" />
            <h3>{item.inStock ? "yes" : "no"}</h3>
          </a>
        );
      })}
    </MainPageLayout>
  );
};

export default Product;
