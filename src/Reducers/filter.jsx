import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice ({
 name:"filter",
 initialState: {
  brands: [],
  variants: [],
  price: [],
},
   reducers:{
     brandsFilter: (state) => state,
     variantsFilter: (state) => state,
     priceFilter: (state) => state,
    },
});

export const {brandsFilter, variantsFilter, priceFilter} = filterSlice.actions;
export default filterSlice.reducer;