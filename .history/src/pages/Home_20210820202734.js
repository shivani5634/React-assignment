// import { Slideshow } from "@material-ui/icons";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import "./styles/main.scss";
import Instance from "../components/SlideShow";
// import ShoppingCart from "../components/ShoppingCart";

const Home = () => {
  return (
    <MainPageLayout>
      <Instance />
    </MainPageLayout>
  );
};

export default Home;
