import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const orderSlice = createSlice ({
 name:"orderdetail",
 initialState: {
     id:0,
     productImg: "",
     price: "",
     quantity: "",
 },
   reducers:{

    handleId: (state) => {
      return produce(state, (draft) => {
        draft.id += 1;
      });
    },

    handleImage: (state, action) => {
      return produce(state, (draft) => {
        draft.productImg = action.payload;
      });
    },
    handlePrice: (state, action) => {
      return produce(state, (draft) => {
        draft.price = action.payload;
      });
    },
    handleQuantity: (state, action) => {
      return produce(state, (draft) => {
        draft.quantity = action.payload;
      });
    },
    },
});

export const {handleImage, handlePrice, handleQuantity, handleId} = orderSlice.actions;
export default orderSlice.reducer;