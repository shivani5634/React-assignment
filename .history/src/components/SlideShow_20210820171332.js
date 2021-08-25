/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Carousel } from "rsuite";
// src\key.jpg

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
}
const handleSelect = (selectIndex, e) => {
  setIndex(selectIndex);
};

const SlideShow = () => {
  return (
    <div>
      <Carousel autoplay className="custom-slider" onSelect={handleSelect}>
        <img src="key.jpg" alt class="rs-carousel" height="250" />
        <img src="lappy.jpeg" alt class="rs-carousel" height="250" />
        <img src="Mouse.jpg" alt class="rs-carousel" height="250" />
      </Carousel>
    </div>
  );
};

export default SlideShow;
