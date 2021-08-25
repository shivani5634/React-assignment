/* eslint-disable react/style-prop-object */
// import userEvent from "@testing-library/user-event";
import React from "react";
import { Button } from "reactstrap";
import { Icon } from "rsuite";
import "styled-components";
// import Checkout from "../components/Checkout";
import ManageCategory from "../pages/ManageCategory";
// import MainPageLayout from "./MainPageLayout";
// import { Button, Icon } from "rsuite";
// cosnt[(insert, setInsert)] = userEvent;

const ShoppingCart = () => {
  return (
    <div>
      <Button>
        <Icon icon="cart-plus"></Icon>
        <ManageCategory />
      </Button>
    </div>
  );
};

export default ShoppingCart;
