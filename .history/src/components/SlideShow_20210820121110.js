/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Carousel } from "rsuite";

const SlideShow = () => {
  return (
    <Carousel autoplay className="custom-slider">
      <img
        src="C:\Users\Win 10\Desktop\projects\e-commerce\src\key.jpg"
        alt
        class="rs-carousel"
        height="250"
      />
      <img
        src="C:\Users\Win 10\Desktop\projects\e-commerce\src\lappy.jpeg"
        alt
        class="rs-carousel"
        height="250"
      />
      <img
        src="C:\Users\Win 10\Desktop\projects\e-commerce\src\Mouse.jpg"
        alt
        class="rs-carousel"
        height="250"
      />
      {/* <img
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
        height="250"
      />
      <img
        src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
        height="250"
      /> */}
    </Carousel>
  );
};

export default SlideShow;
