import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
import { useParams } from "react-router";
import CategoriesJsonArray from "../CategoryProduct/categories.json";

// import styled from "styled-components";

// import ManageCategory from "./ManageCategory";

const Category = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState(CategoriesJsonArray);
  console.log("categories", categories);
  // const Object = [
  //   {
  //     id: "id",
  //     name: "name",
  //     description: "description",
  //   },
  // ];
  useEffect(() => {
    fetch(`/categories/${id}`).then((results) => {
      setCategories(results);
      // console.log(results);
    });
  }, [id]);

  return (
    <MainPageLayout>
      <div className="justify-content-between">
        <a className="text-green" href="#/products/fgsa2142fa">
          {categories}
        </a>
        <div>
          <a className="text-green" href="#/products/xasgy42fa">
            Mouse
          </a>
        </div>
        <div onClick={setCategories}>
          <a className="text-green" href="#/products/fgsa2142fa">
            MK Disco
          </a>
        </div>
        <div>
          <a className="text-green" href="#/products/xasgy42fa">
            USD
          </a>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default Category;
