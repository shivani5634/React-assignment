/* eslint-disable default-case */
import React from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "RESET":
      return [];
    case "ADD_ONE": {
      const isInCart = state.some((item) => item.id === action.id);

      return isInCart
        ? state.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : state.concat({ id: action.id, quantity: 1, price: action.price });
    }

    case "REMOVE_ONE": {
      const isInCart = state.some((item) => item.id === action.id);

      return isInCart
        ? state.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  quantity:
                    item.quantity > 1 ? item.quantity - 1 : item.quantity,
                }
              : item
          )
        : state;
    }

    case "REMOVE": {
      return state.filter((item) => item.id !== action.id);
    }
    default:
      return state;
  }
}
