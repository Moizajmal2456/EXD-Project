import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const filterSlice = createSlice ({
 name:"filter",
 initialState: {
  brands: "",
  variants: "",
  price: "",
 },
   reducers:{
    brandsFilter: (state, action) => {
      return produce(state, (draft) => {
        draft.brands = action.payload;
      });
    },
    variantsFilter: (state, action) => {
      return produce(state, (draft) => {
        draft.variants = action.payload;
      });
    },
    priceFilter: (state, action) => {
      return produce(state, (draft) => {
        draft.price = action.payload;
      });
    },
    },
});

export const {brandsFilter, variantsFilter, priceFilter} = filterSlice.actions;
export default filterSlice.reducer;