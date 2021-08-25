import React, { useCallback, useState } from "react";

import fakeProducts from "../data/products.json";
import Categories from "../data/categories.json";
import Product from "./Product";
import { useFilter } from "../context/useFilters";

function getComputedProducts(products, filters) {
  let result = [...products];
  if (filters.delivery) {
    result = result.filter((p) => p.delivery === true);
  }

  if (filters.inStock) {
    result = result.filter((p) => p.inStock === true);
  }
  if (filters.expensive) {
    result = result.filter((p) => p.price > 100);
  }
  return result;
}

const Category = ({ category }) => {
  const [products] = useState(
    fakeProducts.filter((p) => p.categoryId === categoryId)
  );
  const [filter, dispatchFilter] = useFilter({
    delivery: false,
    inStock: false,
    expensive: false,
  });

  const filteredProducts = getComputedProducts(products, filter);
};
const onCheckboxChane = useCallback((ev) => {
  const checkbox = ev.target;
});
