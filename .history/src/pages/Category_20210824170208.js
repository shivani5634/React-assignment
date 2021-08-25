import { values } from "lodash";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";

const Category = () => {
  return (
    <MainPageLayout>
      {CategoryJsonArray.map((item, index) => {
        return (
          <a class="text-center" href={item.id} key={values}>
            <h2>{item.name}</h2>
            <h5>{item.description}</h5>
          </a>
        );
      })}
    </MainPageLayout>
  );
};

export default Category;
