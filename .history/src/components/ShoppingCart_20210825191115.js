/* eslint-disable react/style-prop-object */
// import userEvent from "@testing-library/user-event";
import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import { Icon } from "rsuite";
import "styled-components";
// import Checkout from "../components/Checkout";
import ManageCategory from "../pages/ManageCategory";
import Checkout from "./Checkout";
// import MainPageLayout from "./MainPageLayout";
// import { Button, Icon } from "rsuite";
// cosnt[(insert, setInsert)] = userEvent;

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
