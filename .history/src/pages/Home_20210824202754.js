// import { Slideshow } from "@material-ui/icons";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import "../styles/main.scss";
import Instance from "../components/SlideShow";
import { ShowPageWrapper } from "../styling/Carousel.styled";
// import ShoppingCart from "../components/ShoppingCart";

const Home = () => {
  return (
    <MainPageLayout>
      <ShowPageWrapper>
        <p className="text-center font-huge">Welcome To Your Shop</p>
        <Instance />
      </ShowPageWrapper>
    </MainPageLayout>
  );
};

export default Home;
