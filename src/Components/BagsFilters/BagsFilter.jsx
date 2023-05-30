import { BagData, BagsBrands, BagsVariant, Price } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";
import style from "./styles.module.scss";

export const BagsFilter = () => {
return(
     <div className={style.Filter}>
        <FilterButton
        brands={BagsBrands}
        variants={BagsVariant}
        pricerange={Price}
        data={BagData}/>
     </div>
);
};