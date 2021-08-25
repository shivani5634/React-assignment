/* eslint-disable react/style-prop-object */
// import userEvent from "@testing-library/user-event";
import React from "react";

import { Button } from "reactstrap";
import { Icon } from "rsuite";
import "styled-components";
import ManageCategory from "../pages/ManageCategory";

const ShoppingCart = () => {
  return (
    <div>
      <Button>
        <Icon icon="shopping-cart" size="5x">
          <ManageCategory />
        </Icon>
      </Button>
    </div>
  );
};

export default ShoppingCart;
