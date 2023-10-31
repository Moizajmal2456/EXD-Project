import { useDispatch } from "react-redux";
import style from "./styles.module.scss";
import { brandsFilter, priceFilter, variantsFilter } from "../../Reducers/filter";

export const FilterButton = ({brands, variants, pricerange }) => {

const dispatch = useDispatch();   

const handleBrandsFiler = (event) => {
   const selectedValue = event.target.value;
   dispatch(brandsFilter(selectedValue));
   console.log(selectedValue);
}

const handleVariantsFilter = (event) => {
   const selectedValue = event.target.value;
   dispatch(variantsFilter(selectedValue));
   console.log(selectedValue);
}

const handlePriceFilter = (event) => {
   const selectedValue = event.target.value;
   dispatch(priceFilter(selectedValue));
   console.log(selectedValue);
}

return(
    <div className={style.Fiters_Wrapper} >
        <div className={style.BrandFilter}>
          <select id="brands-sorting" onChange={handleBrandsFiler}>
             {brands.map((brand) => {
             return(
             <option key={brand.id} value={brand.name}>{brand.name}</option>
             )
             })}
          </select>
        </div>
        <div className={style.VariantFilter}>
          <select id="variants-sorting" onChange={handleVariantsFilter}>
             {variants.map((variant) => {
              return(
              <option key={variant.id} value={variant.name}>{variant.name}</option>
               )
              })}
           </select>
        </div>
        <div className={style.PriceFilter}>
          <select id="price-sorting" onChange={handlePriceFilter}>
             {pricerange.map((price) => {
              return(
              <option key={price.id} value={price.name}>{price.name}</option>
               )
               })}
          </select>
        </div>
    </div>
);
};