import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice ({
 name:"filter",
 initialState: {
  brands: "",
  variants: "",
  price: "",
 },
   reducers:{
     brandsFilter: (state) => state.brands,
     variantsFilter: (state) => state.variants,
     priceFilter: (state) => state.price,
    },
});

export const {brandsFilter, variantsFilter, priceFilter} = filterSlice.actions;
export default filterSlice.reducer;