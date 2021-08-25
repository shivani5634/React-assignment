/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useCallback } from "react";
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
import { useCartDispatch } from "../context/cart.context";
import CategoryContainer from "./FilterPage";
import Checkout from "./Checkout";

const Product = () => {
  const [products] = useState(ProductJsonArray);
  const dispatchCart = useCartDispatch();

  const handleAddToCart = useCallback(
    (id, price, instock) => {
      if (!instock) {
        return;
      }
      dispatchCart({ type: "ADD_ONE", id, price });
    },
    [dispatchCart]
  );

  // const handleAddToCart = useCallback(
  //   (id, price, inStock) => {
  //     if (!inStock) {
  //       return;
  //     }

  //     dispatchCart({ type: 'ADD_ONE', id, price });
  //   },
  //   [dispatchCart]
  // );
  if (products.length === 0) {
    return <div>No Products found</div>;
  }
  return (
    <MainPageLayout>
      <CategoryContainer />
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
              {/* 
              {item.delivery ? (
                <CardText className="mb-1">Delivery Available</CardText>
              ) : (
                "Delivery Not Available"
              )} */}
              <CardText
                className={
                  item.delivery
                    ? "text-black font-bolder"
                    : "text-red font-bolder"
                }
              >
                {item.delivery
                  ? "Delivery Available"
                  : "Delivery not available"}
              </CardText>

              <CardText
                className={
                  item.inStock
                    ? "text-green font-bolder"
                    : "text-danger font-bolder"
                }
              >
                {item.inStock ? "In Stock" : "Out of Stock"}
              </CardText>
              <Button
                className="mb-3"
                color="blue"
                disabled={!item.inStock}
                onClick={() =>
                  handleAddToCart(item.id, item.price, item.inStock)
                }
              >
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
