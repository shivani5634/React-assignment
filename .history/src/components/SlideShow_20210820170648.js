/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "rsuite";
// src\key.jpg

const SlideShow = () => {
  return (
    <div>
      <Carousel autoplay className="custom-slider">
        <img src="key.jpg" alt class="rs-carousel" height="250" />
        <img src="lappy.jpeg" alt class="rs-carousel" height="250" />
        <img src="Mouse.jpg" alt class="rs-carousel" height="250" />
      </Carousel>
    </div>
  );
};

export default SlideShow;
