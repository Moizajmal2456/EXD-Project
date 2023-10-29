import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice ({
 name:"filter",
 initialState: 0,
   reducers:{
     brandsFilter: (state) => state ,
     variantsFilter: (state) => state ,
     priceFilter: (state) => state ,
    },
});

export const {brandsFilter, variantsFilter, priceFilter} = FilterSlice.actions;
export default FilterSlice.reducer;