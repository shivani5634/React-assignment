/* eslint-disable react/style-prop-object */
// import userEvent from "@testing-library/user-event";
import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import { Icon } from "rsuite";
import "styled-components";

const ShoppingCart = () => {
  return (
    <div>
      <Button>
        <Icon icon="cart-plus" size="5x"></Icon>
        <Icon icon="circle" size="5x"></Icon>
      </Button>
    </div>
  );
};

export default ShoppingCart;
