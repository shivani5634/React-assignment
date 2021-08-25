/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Carousel } from "rsuite";
// src\key.jpg
const instance = (
  <Carousel autoplay className="custom-slider">
    <img
      src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt
      className="first"
      height="250"
    />
    <img
      src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt
      className="second"
      height="250"
    />
    <img
      src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt
      className="third"
      height="250"
    />
    <img
      src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
      alt
      className="fourth"
      height="250"
    />
    <img
      src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
      alt
      className="fifth"
      height="250"
    />
  </Carousel>
);

export default instance;
