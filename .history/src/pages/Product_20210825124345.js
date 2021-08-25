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
  const [products, setProduct] = useState(ProductJsonArray);
  return (
    <MainPageLayout>
      {products.map((item, index) => {
        return (
          <Card className="mb-3 justify-content-center" key={item.categoryId}>
            <CardImg
              top
              width="100%"
              src={item.thumbnail}
              alt={item.name}
              className="h-50"
            />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardSubtitle>${item.price}</CardSubtitle>

              {item.delivery ? (
                <CardText>Delivery Available</CardText>
              ) : (
                "Delivery Not Available"
              )}

              <CardText>{item.inStock ? "In Stock" : "Out of Stock"}</CardText>
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
