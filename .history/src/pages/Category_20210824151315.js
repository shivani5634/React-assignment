/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
import { useParams } from "react-router";
import CategoriesJsonArray from "../CategoryProduct/categories.json";

// import styled from "styled-components";

// import ManageCategory from "./ManageCategory";

const Category = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState(CategoriesJsonArray);
  console.log(categories);
  // const Object = [
  //   {
  //     id: "id",
  //     name: "name",
  //     description: "description",
  //   },
  // ];
  const onSearch = useEffect(() => {
    fetch(`https://categories/${categoryId}`)
      .then((r) => r.json())
      .then((results) => {
        console.log(results);
      });
    // console.log(results);
  }, [categoryId]);
  return (
    <MainPageLayout>
      <div onClick={onSearch}>
        <a className="text-green" href={categoryId}>
          <h3> keyboard</h3>
        </a>
        <div>
          <a className="text-green" href={categoryId}>
            Mouse
          </a>
        </div>
        <div>
          <a className="text-green" href={categoryId}>
            MK Disco
          </a>
        </div>
        <div>
          <a className="text-green" href={categoryId}>
            USD
          </a>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default Category;
