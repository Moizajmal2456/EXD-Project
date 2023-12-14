import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const orderSlice = createSlice ({
 name:"orderdetail",
 initialState: {
     img: "",
     price: "",
     quantity: "",
 },
   reducers:{
    image: (state, action) => {
      return produce(state, (draft) => {
        draft.brands = action.payload;
      });
    },
    price: (state, action) => {
      return produce(state, (draft) => {
        draft.variants = action.payload;
      });
    },
    quantity: (state, action) => {
      return produce(state, (draft) => {
        draft.price = action.payload;
      });
    },
    },
});

export const {image, price, quantity} = orderSlice.actions;
export default orderSlice.reducer;