/* eslint-disable react/style-prop-object */
// import userEvent from "@testing-library/user-event";
import React from "react";
import "styled-components";
import Checkout from "../pages/Checkout";
// import { Button, Icon } from "rsuite";
// cosnt[(insert, setInsert)] = userEvent;

const onPress = () => {};

const ShoppingCart = () => {
  return (
    <div>
      <button type="button" class="rs-btn rs-btn-default">
        <i class="rs-icon rs-icon-shopping-basket rs-icon-size-lg">
          <div
            class="rs-avatar rs-avatar-sm rs-avatar-circle"
            onClick={onPress}
            style={{
              background: "black",
              color: "rgb(245, 245, 245)",
            }}
          ></div>
        </i>
        <span class="rs-ripple-pond text-right">
          <span
            class="rs-ripple"
            style={{
              width: "147.648px",
              height: "147.648px",
              left: "-51.246px",
              top: "-38.8241px;",
            }}
          ></span>
        </span>
        <Checkout />
      </button>
    </div>
  );
};

export default ShoppingCart;
