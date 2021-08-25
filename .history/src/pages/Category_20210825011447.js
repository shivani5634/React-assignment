/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "rsuite";
import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";
import Product from "./Product";

const Category = () => {
  const [categories, setCategories] = useState(CategoryJsonArray);
  return (
    <MainPageLayout>
      <Container>
        {categories.map((item, index) => {
          return (
            <a class="text-center" href={item.id}>
              <span className="setting">
                <h2>{item.name}</h2>
                <h5>{item.description}</h5>
              </span>
            </a>
          );
        })}
      </Container>
    </MainPageLayout>
  );
};

export default Category;
