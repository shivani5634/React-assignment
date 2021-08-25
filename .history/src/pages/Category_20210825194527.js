/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Card } from "reactstrap";

import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";
import ProductJsonArray from "../data/products.json";
import Product from "./Product";

const Category = () => {
  const [categories, setCategories] = useState(CategoryJsonArray);
  const [products, setProducts] = useState(ProductJsonArray);
  return (
    <MainPageLayout>
      <Card>
        {categories.map((item, index) => {
          return (
            <Col>
              <div>
                <a class="text-center" href={item.id}>
                  <span className="setting">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                  </span>
                </a>
              </div>
            </Col>
          );
        })}
      </Card>
    </MainPageLayout>
  );
};

export default Category;
