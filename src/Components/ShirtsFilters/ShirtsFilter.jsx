import { Price, ShirtsBrands, ShirtsVariant } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";
import style from "./styles.module.scss";
import { ShirtData } from "../../Data";

export const ShirtsFilter = () => {
return(
     <div className={style.Filter}>
        <FilterButton 
        brands={ShirtsBrands}
        variants={ShirtsVariant}
        pricerange={Price}
        data={ShirtData}/>
     </div>
);
};