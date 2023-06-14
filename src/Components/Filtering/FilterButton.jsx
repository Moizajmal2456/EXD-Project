import style from "./styles.module.scss";

export const FilterButton = ({id , brands, variants, pricerange }) => {

    const BrandsFilter =  ( event ) => {
        // const { value } = event.target;
        // if(value === 0) 
        // {
        // return ;
        // }
        // const BrandFilteredProduct = data.filter((m) => m.brand === value);
        };

return(
    <div className={style.Fiters_Wrapper} >
        <div className={style.BrandFilter}>
        <select id="brands-sorting" >
                <option key={id} value={brands}>{brands}</option>
        </select>
      </div>
      <div className={style.VariantFilter}>
      <select id="variants-sorting">
                <option key={id} value={variants}>{variants}</option>
        </select>
      </div>
      <div className={style.PriceFilter}>
       <select id="price-sorting">
           <option key={id} value={pricerange}>{pricerange}</option>
     </select>
     </div>
    </div>
);
};