import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";

const Category = () => {
  return (
    <MainPageLayout>
      {CategoryJsonArray.map((item, index) => {
        return (
          <a class="text-center" href={item.id}>
            <span className="setting">
              <h2>{item.name}</h2>
              <h5>{item.description}</h5>{" "}
            </span>
          </a>
        );
      })}
    </MainPageLayout>
  );
};

export default Category;
