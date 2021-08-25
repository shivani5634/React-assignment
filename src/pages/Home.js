// import { Slideshow } from "@material-ui/icons";
import React from "react";
import MainPageLayout from "../components/MainPageLayout";
import "../styles/main.scss";
import Instance from "../components/SlideShow";
import { useMediaQuery } from "../misc/custom-hooks";

// import ShoppingCart from "../components/ShoppingCart";

const Home = () => {
  const { isMobile } = useMediaQuery("(max-width:992px)");
  return (
    <MainPageLayout>
      <p className="text-center font-huge font-bolder text-blue">
        Welcome To Your Shop
      </p>
      <Instance full={isMobile} />
    </MainPageLayout>
  );
};

export default Home;
