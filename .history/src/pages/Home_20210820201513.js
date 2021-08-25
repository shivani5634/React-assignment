// import { Slideshow } from "@material-ui/icons";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import instance from "../components/SlideShow";
// import ShoppingCart from "../components/ShoppingCart";

const Home = () => {
  return (
    <MainPageLayout>
      <instance />
    </MainPageLayout>
  );
};

export default Home;
