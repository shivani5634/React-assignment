import React from "react";

function getComputedProducts(products, filters) {
  let result = [...products];
  if (filters.delivery) {
    result = result.filter((p) => p.delivery === true);
  }
}
