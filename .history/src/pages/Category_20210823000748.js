import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
import { useParams } from "react-router";
import CategoriesJsonArray from "./categories.json";

import styled from "styled-components";

// import ManageCategory from "./ManageCategory";

const theme = styled.a`
  background-color: black;
`;

const Category = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState(CategoriesJsonArray);
  console.log("categories", categories);
  useEffect(() => {
    `/category/${categoryId}`.then((results) => {
      setCategories(results);
      console.log(results);
    });
  }, [categoryId]);

  return (
    <MainPageLayout>
      <div className="justify-content-between">
        <theme>
          <a className="text-green" href="#/products/categoryId">
            {categories}
          </a>
          <div>
            <a className="text-green" href="#/products/xasgy42fa">
              Mouse
            </a>
          </div>
          <div>
            <a className="text-green" href="#/products/fgsa2142fa">
              MK Disco
            </a>
          </div>
          <div>
            <a className="text-green" href="#/products/xasgy42fa">
              USD
            </a>
          </div>
        </theme>
      </div>
    </MainPageLayout>
  );
};

export default Category;
