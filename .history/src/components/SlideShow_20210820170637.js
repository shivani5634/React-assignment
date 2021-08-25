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
        {/* <img
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
        height="250"
      />
      <img
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
        height="250"
      /> */}
      </Carousel>
    </div>
  );
};

export default SlideShow;
