import { createSlice } from "@reduxjs/toolkit";

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
     brandsFilter: (state, action) => state.brands = action.payload,
     variantsFilter: (state, action) => state.variants = action.payload,
     priceFilter: (state, action) => state.price = action.payload,
    },
});

export const {brandsFilter, variantsFilter, priceFilter} = filterSlice.actions;
export default filterSlice.reducer;