import style from "./styles.module.scss";

export const FilterButton = ({brands, variants, pricerange }) => {
return(
    <div className={style.Fiters_Wrapper} >
        <div className={style.BrandFilter}>
          <select id="brands-sorting">
             {brands.map((brand) => {
             return(
             <option key={brand.id} value={brand.id}>{brand.name}</option>
             )
             })}
          </select>
        </div>
        <div className={style.VariantFilter}>
          <select id="variants-sorting">
             {variants.map((variant) => {
              return(
              <option key={variant.id} value={variant.id}>{variant.name}</option>
               )
              })}
           </select>
        </div>
        <div className={style.PriceFilter}>
          <select id="price-sorting">
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