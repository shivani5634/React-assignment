import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

import ProductJsonArray from "../data/products.json";
const Product = () => {
  const [products, setProduct] = useState(ProductJsonArray);
  return <MainPageLayout>{products}</MainPageLayout>;
};

export default Product;
