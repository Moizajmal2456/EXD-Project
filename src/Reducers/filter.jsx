import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

// const initialState = {
//   brands: "", // Selected value for the brands select element
//   variants: "", // Selected value for the variants select element
//   price: "", // Selected value for the price select element
// };

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