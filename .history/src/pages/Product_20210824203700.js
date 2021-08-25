/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "../styles/main.scss";

import MainPageLayout from "../components/MainPageLayout";

import ProductJsonArray from "../data/products.json";
const Product = () => {
  const [products, setProduct] = useState(ProductJsonArray);
  return (
    <MainPageLayout>
      {products.map((item, index) => {
        return (
          <a className="text-center" href={item.categoryId}>


    <img
              src={item.thumbnail}
              className="text-center"
              alt
              className="keyboard"
              height="250"
            />
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h3>{item.currency}</h3>

            <h3>{item.inStock ? "yes" : "no"}</h3>
          </a>
        );
      })}
    </MainPageLayout>
  );
};

export default Product;
