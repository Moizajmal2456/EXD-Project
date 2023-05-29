import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { BagData } from "../../Data";
import { BagsBrands } from "../../Data";
import { BagsVariant } from "../../Data";
import { Price } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";

export const Bags = () => {
return(
<div className={style.Bags_Wrapper}>
    <div className={style.Filter}>
        <FilterButton
        brands={BagsBrands}
        variants={BagsVariant}
        pricerange={Price}/>
      </div>
<div className={style.Bags}>
{BagData.map(product => (
<Cards 
image={product.img}
heading={product.heading}
price={product.price}
buttonText={product.buttonText}/>
))}
</div>
</div>
);
};