/* eslint-disable react/style-prop-object */
// import userEvent from "@testing-library/user-event";
import React from "react";
import { Button } from "reactstrap";
import { Icon } from "rsuite";
import "styled-components";
import Checkout from "../pages/Checkout";
// import { Button, Icon } from "rsuite";
// cosnt[(insert, setInsert)] = userEvent;

const ShoppingCart = () => {
  return (
    <div>
      <Button>
        <Icon icon="cart-plus"></Icon>
        <Checkout />
      </Button>
    </div>
  );
};

export default ShoppingCart;
