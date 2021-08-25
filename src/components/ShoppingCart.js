/* eslint-disable react/style-prop-object */
// import userEvent from "@testing-library/user-event";
import React from "react";

import { Button } from "reactstrap";
import { Icon } from "rsuite";

import "styled-components";

const ShoppingCart = () => {
  return (
    <div>
      <Button>
        <Icon icon="shopping-cart" size="5x"></Icon>
      </Button>
    </div>
  );
};

export default ShoppingCart;
