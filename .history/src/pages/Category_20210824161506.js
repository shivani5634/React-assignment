/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";

import data from "../CategoryProduct/categories.json";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState(data);
  const newdata = data.map((data) => {
    return (
      <MainPageLayout>
        <div key={data.categoryId} className="text-center">
          <a className="text-green" href={data.url}>
            <h3>{data.name}</h3>
            <h5>{data.description}</h5>
          </a>
        </div>
      </MainPageLayout>
    );
  });
};

export default Category;
