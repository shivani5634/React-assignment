import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import CategoryJsonArray from "../data/categories.json";

const Category = () => {
  return <MainPageLayout>
    {CategoryJsonArray.map((item,index)=>{
      return <h2>{item.name}}/h2>

    })}
  </MainPageLayout>;
};

export default Category;
