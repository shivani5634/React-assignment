/* eslint-disable react/style-prop-object */
import React from "react";
import "styled-components";
// import { Button, Icon } from "rsuite";

const ShoppingCart = () => {
  return (
    <div>
      <button type="button" class="rs-btn rs-btn-default">
        <i class="rs-icon rs-icon-shopping-basket rs-icon-size-lg"></i>
        <div
          class="rs-avatar rs-avatar-sm rs-avatar-circle"
          style={{
            background: "grey",
            color: "rgb(245, 245, 245)",
          }}
        >
          1
        </div>
        <span class="rs-ripple-pond">
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
      </button>
    </div>
  );
};

export default ShoppingCart;
