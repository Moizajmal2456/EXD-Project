import { useDispatch } from "react-redux";
import style from "./styles.module.scss";
import { brandsFilter, priceFilter, variantsFilter } from "../FilteredStateHandling/Filtered";

export const FilterButton = ({brands, variants, pricerange }) => {

const dispatch = useDispatch();   

const handleBrandsFiler = (event) => {
   const selectedValue = event.target.value;
   dispatch(brandsFilter(selectedValue));
}

const handleVariantsFilter = (event) => {
   const selectedValue = event.target.value;
   dispatch(variantsFilter(selectedValue));
}

const handlePriceFilter = (event) => {
   const selectedValue = event.target.value;
   dispatch(priceFilter(selectedValue));
}

return(
    <div className={style.Fiters_Wrapper} >
        <div className={style.BrandFilter}>
          <select id="brands-sorting" onChange={handleBrandsFiler}>
             {brands.map((brand) => {
             return(
             <option key={brand.id} value={brand.id}>{brand.name}</option>
             )
             })}
          </select>
        </div>
        <div className={style.VariantFilter}>
          <select id="variants-sorting" onChange={handleVariantsFilter}>
             {variants.map((variant) => {
              return(
              <option key={variant.id} value={variant.id}>{variant.name}</option>
               )
              })}
           </select>
        </div>
        <div className={style.PriceFilter}>
          <select id="price-sorting" onChange={handlePriceFilter}>
             {pricerange.map((price) => {
              return(
              <option key={price.id} value={price.id}>{price.name}</option>
               )
               })}
          </select>
        </div>
    </div>
);
};