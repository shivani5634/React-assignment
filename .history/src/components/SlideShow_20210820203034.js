/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Carousel } from "rsuite";
// src\key.jpg

const Instance = () => {
  return (
    <Carousel autoplay className="custom-slider mt-page">
      <img
        src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt
        className="keyboard"
        height="200"
        width="100"
      />
      <img
        src="https://images.unsplash.com/photo-1527814050087-3793815479db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1828&q=80"
        alt
        className="mouse"
        height="200"
        width="100"
      />
      <img
        src="https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80"
        alt
        className="laptop"
        height="200"
        width="100"
      />
      <img
        src="https://images.unsplash.com/photo-1540821924489-7690c70c4eac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=991&q=80"
        alt
        className="headphone"
        height="200"
        width="100"
      />
      <img
        src="https://images.unsplash.com/photo-1526876798423-97e53fb23428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt
        className="speaker"
        height="200"
        width="100"
      />
    </Carousel>
  );
};

export default Instance;
