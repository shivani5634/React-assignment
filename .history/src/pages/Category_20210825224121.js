/* eslint-disable no-unused-vars */

import { Box } from "@material-ui/icons";
import React, { useState } from "react";
import { Card } from "reactstrap";

import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";
import ProductJsonArray from "../data/products.json";
import Product from "./Product";

const Category = () => {
  const [categories, setCategories] = useState(CategoryJsonArray);
  const [products, setProducts] = useState(ProductJsonArray);

  const apply = products.map((item, index) => {
    return item.categoryId;
  });

  return (
    <MainPageLayout>
      <Card className="mb-3 text-center">
        {products.map((item, index) => {
          return (
            <div>
              <a class="text-center" href={item.id}>
                <span className="setting">
                  <Box>
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                  </Box>
                </span>
              </a>
            </div>
          );
        })}
      </Card>
    </MainPageLayout>
  );
};

export default Category;
