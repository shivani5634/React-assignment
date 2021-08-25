import React, { useState } from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
// import { useParams } from "react-router";
import CategoriesJsonArray from "./CategoryProduct/categories.json";

import styled from "styled-components";

// import ManageCategory from "./ManageCategory";

const theme = styled.a`
  background-color: black;
`;

const Category = () => {
  const [category, setCategory] = useState(CategoriesJsonArray);
  // const { id } = useParams();
  // console.log("params", params);

  return (
    <MainPageLayout>
      <div className="justify-content-between">
        <theme>
          <a className="text-green" href="#/products/fgsa2142fa">
            keyboard
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
