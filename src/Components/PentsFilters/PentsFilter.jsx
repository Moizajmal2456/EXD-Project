import { PentsBrands, PentsVariant, Price, PentData } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";
import style from "./styles.module.scss";

export const PentsFilter = () => {
return(
     <div className={style.Filter}>
        <FilterButton 
        brands={PentsBrands}
        variants={PentsVariant}
        pricerange={Price}
        data={PentData}/>
     </div>
);
};