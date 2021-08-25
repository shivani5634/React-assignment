/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "../misc/custom-hooks";
import "../styles/main.scss";

const Instance = () => {
  const { isMobile } = useMediaQuery("(max-width:992px)");
  return (
    <div>
      <Carousel infiniteLoop autoplay>
        <div>
          <img
            src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt
            className="keyboard"
            height="550"
            full={isMobile}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1527814050087-3793815479db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1828&q=80"
            alt
            className="mouse"
            height="550"
            full={isMobile}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80"
            alt
            className="laptop"
            height="550"
            full={isMobile}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1540821924489-7690c70c4eac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=991&q=80"
            alt
            className="headphone"
            height="550"
            full={isMobile}
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1526876798423-97e53fb23428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt
            className="speaker"
            height="550"
            full={isMobile}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Instance;
