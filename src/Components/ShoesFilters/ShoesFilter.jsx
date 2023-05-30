import { Price, ShoesBrands, ShoesData, ShoesVariant } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";
import style from "./styles.module.scss";

export const ShoesFilter = () => {
return(
     <div className={style.Filter}>
        <FilterButton
        brands={ShoesBrands}
        variants={ShoesVariant}
        pricerange={Price}
        data={ShoesData}/>
     </div>
);
};