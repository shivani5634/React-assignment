/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "../styles/main.scss";

import MainPageLayout from "../components/MainPageLayout";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import ProductJsonArray from "../data/products.json";
import { Button, Icon } from "rsuite";

const Product = () => {
  const [products] = useState(ProductJsonArray);
  return (
    <MainPageLayout>
      {products.map((item, index) => {
        return (
          <Card className="mb-3 text-center" key={item.categoryId}>
            <CardImg
              top
              width="50%"
              src={item.thumbnail}
              alt={item.name}
              className="h-50"
            />
            <CardBody className="font-weight">
              <CardTitle className="h5">{item.name}</CardTitle>
              <CardSubtitle className="h5 mb-2">${item.price}</CardSubtitle>

              {item.delivery ? (
                <CardText className="mb-1">Delivery Available</CardText>
              ) : (
                "Delivery Not Available"
              )}

              <CardText
                className={item.inStock ? "text-success" : "text-danger"}
              >
                {item.inStock ? "In Stock" : "Out of Stock"}
              </CardText>
              <Button className="mb-3" color="dark" disabled={!item.inStock}>
                <Icon icon="cart-plus" className="text-black font-bolder">
                  Add to Cart
                </Icon>
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </MainPageLayout>
  );
};

export default Product;
