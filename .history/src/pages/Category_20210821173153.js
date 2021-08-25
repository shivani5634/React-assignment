import React from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
import { useParams } from "react-router";

// import ManageCategory from "./ManageCategory";

const Category = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <MainPageLayout>
      <div className="justify-content-between">
        <a className="text-green" href="#/products/fgsa2142fa">
          keyboard
        </a>
        <a className="text-green" href="#/products/xasgy42fa">
          Mouse
        </a>
      </div>
    </MainPageLayout>
  );
};

export default Category;
