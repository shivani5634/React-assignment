import React from "react";

import ProductJsonArray from "../data/products.json";
import Categories from "../data/categories.json";

function getComputedProducts(products, filters) {
  let result = [...products];
  if (filters.delivery) {
    result = result.filter((p) => p.delivery === true);

    if(filters.inStock)
  }
}
