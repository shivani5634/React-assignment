/* eslint-disable default-case */
import React from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "RESET":
      return [];
    case "ADD_ONE": {
      const isInCart = state.some((item) => item.id === action.id);
    }
  }
}
