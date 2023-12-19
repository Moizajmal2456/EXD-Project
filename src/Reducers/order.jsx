import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const orderSlice = createSlice ({
 name:"orderdetail",
 initialState: {
     image: "",
     price: "",
     quantity: "",
 },
   reducers:{
    handleimage: (state, action) => {
      return produce(state, (draft) => {
        draft.image = action.payload;
      });
    },
    handleprice: (state, action) => {
      return produce(state, (draft) => {
        draft.price = action.payload;
      });
    },
    handlequantity: (state, action) => {
      return produce(state, (draft) => {
        draft.quantity = action.payload;
      });
    },
    },
});

export const {handleimage, handleprice, handlequantity} = orderSlice.actions;
export default orderSlice.reducer;