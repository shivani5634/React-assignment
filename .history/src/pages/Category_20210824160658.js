/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
// import { useParams } from "react-router";
import data from "../CategoryProduct/categories.json";

// import styled from "styled-components";

// import ManageCategory from "./ManageCategory";

const Category = () => {
  // const { categoryId } = useParams();
  // const [categories, setCategories] = useState(CategoriesJsonArray);

  // console.log(categories);
  // const Object = useState({ id: "", name: "", description: "" });

  // const onSelection = () => {
  //   fetch("categories.json")
  //     // .then((r) => r.json())
  //     .then((results) => {
  //       // setCategories(results);
  //       console.log(results);
  //     });
  //   // console.log(results);
  // };
  const newdata = data.map((data) => {
    return (
      <MainPageLayout>
        <div key={data.id} className="text-center">
          <a className="text-green" href={data}>
            <h3>{data.name}</h3>
            <h5>{data.description}</h5>
          </a>
        </div>
      </MainPageLayout>
    );
  });
};

export default Category;
