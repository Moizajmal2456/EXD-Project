import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { ShirtData } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";
import { ShirtsBrands } from "../../Data";
import { ShirtsVariant } from "../../Data";
import { Price } from "../../Data";

export const Shirts = () => {
return(
    <div className={style.Shirts_Wrapper} >
      <div className={style.Filter}>
        <FilterButton 
        brands={ShirtsBrands}
        variants={ShirtsVariant}
        pricerange={Price}/>
      </div>
     <div className={style.Shirts}>
     {ShirtData.map(shirt => (
         <Cards  
         image={shirt.img}
         heading={shirt.heading}
         price={shirt.price}
         buttonText={shirt.buttonText}/>
         ))}
    </div>
    </div>
);
};