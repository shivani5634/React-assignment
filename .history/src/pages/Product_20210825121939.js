/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "../styles/main.scss";

import MainPageLayout from "../components/MainPageLayout";
import {Card} from 'react'

import ProductJsonArray from "../data/products.json";
import { Button, Container, Icon } from "rsuite";

const Product = () => {
  const [products, setProduct] = useState(ProductJsonArray);
  return (
    <MainPageLayout>
      <Container>
        {products.map((item, index) => {
          return (
            <Card>
            <a className="text-center text-black mb-1" href={item.categoryId}>
              <img
                src={item.thumbnail}
                className="text-center"
                alt
                className="keyboard"
                height="250"
              />
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
              <h3>{item.currency}</h3>

              <>{item.inStock ? "In Stock" : "Out of Stock"}</>
              <Button className="mb-3 bg-color">
                <Icon icon="cart-plus" className="text-black font-bolder">
                  Add to Cart
                </Icon>
              </Button>
            </a>
          );
          </Card>
        })}
      </Container>
    </MainPageLayout>
  );
};

export default Product;
