import React from "react";

import fakeProducts from "../data/products.json";
import Categories from "../data/categories.json";
import Product from "./Product";

function getComputedProducts(products, filters) {
  let result = [...products];
  if (filters.delivery) {
    result = result.filter((p) => p.delivery === true);

    if (filters.inStock) {
      result = result.filter((p) => p.inStock === true);
    }
  }
}
