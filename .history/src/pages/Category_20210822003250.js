import React from "react";
import "../styles/main.scss";
import MainPageLayout from "../components/MainPageLayout";
import { useParams } from "react-router";
import styled from "styled-components";

// import ManageCategory from "./ManageCategory";

const theme = styled.div`
  text-align: center;
  display: block;
`;

const Category = () => {
  const params = useParams();
  console.log("params", params);

  return (
    <MainPageLayout>
      <theme>
        <div className="justify-content-between">
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
        </div>
      </theme>
    </MainPageLayout>
  );
};

export default Category;
