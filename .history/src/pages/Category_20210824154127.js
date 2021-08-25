/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
// import { useParams } from "react-router";
import CategoriesJsonArray from "../CategoryProduct/categories.json";

// import styled from "styled-components";

// import ManageCategory from "./ManageCategory";

const Category = () => {
  // const { categoryId } = useParams();
  const [categories, setCategories] = useState(CategoriesJsonArray);

  const onSelection = (ev) => {
    console.log(ev);
  };
  // console.log(categories);
  // const Object = useState({ id: "", name: "", description: "" });

  // const onSelection = () => {
  //   fetch(`https://category/${categories}`)
  //     .then((r) => r.json())
  //     .then((results) => {
  //       // setCategories(results);
  //       console.log(results);
  //     });
  //   // console.log(results);
  // };
  return (
    <MainPageLayout>
      <div className="text-center">
        <a className="text-green" href={categories} onClick={onSelection}>
          <h3> keyboard</h3>
        </a>
        <div>
          <a className="text-green" href={categories}>
            Mouse
          </a>
        </div>
        <div>
          <a className="text-green" href={categories}>
            MK Disco
          </a>
        </div>
        <div>
          <a className="text-green" href={categories}>
            USD
          </a>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default Category;
