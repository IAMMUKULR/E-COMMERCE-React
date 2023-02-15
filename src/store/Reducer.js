import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartValue: 0,
};

export const customReducer = createReducer(initialState, {
  increment: (state, action) => {
    state.cartValue += 1;
  },
  decrement: (state, action) => {
    state.cartValue -= 1;
  },
});
