import React from "react";
import MainPageLayout from "../components/MainPageLayout";
// import ManageCategory from "./ManageCategory";

const Category = () => {
  return (
    <MainPageLayout>
      <div className="justify-content-center">
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
