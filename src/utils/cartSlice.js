import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla (older) Redux => DON'T MUTATE STATE, returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;


        // Behind the scene Redux toolkit uses Immer library under the hood to make the state immutable
      // Redux Toolkit
      // We HAVE to mutate the state directly
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
