/* eslint-disable no-unused-vars */
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
  // console.log("categories", categories);
  // const Object = [
  //   {
  //     id: "id",
  //     name: "name",
  //     description: "description",
  //   },
  // ];
  const onSearch = useEffect(() => {
    fetch(`/categories/${id}`)
      .then((r) => r.json())
      .then((results) => {
        console.log(results);
      });
    // console.log(results);
  }, [id]);
  return (
    <MainPageLayout>
      <div onClick={onSearch}>
        <a className="text-green" href={id}>
          keyboard
        </a>
        <div>
          <a className="text-green" href={id}>
            Mouse
          </a>
        </div>
        <div>
          <a className="text-green" href={id}>
            MK Disco
          </a>
        </div>
        <div>
          <a className="text-green" href={id}>
            USD
          </a>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default Category;
