/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Carousel } from "rsuite";
// src\key.jpg
const instance = (
  <Carousel autoplay className="custom-slider">
    <img
      src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
      alt
      className="first"
      height="250"
    />
    <img
      src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
      alt
      className="second"
      height="250"
    />
    <img
      src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
      alt
      className="third"
      height="250"
    />
    <img
      src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
      height="250"
    />
    <img
      src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
      height="250"
    />
  </Carousel>
);

export default instance;
