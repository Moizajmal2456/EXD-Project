import { Cards } from "../../Cards/Card/Cards";
import style from "./styles.module.scss";
import { PentData } from "../../Data";
import { PentsBrands } from "../../Data";
import { PentsVariant } from "../../Data";
import { Price } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";

export const Pents = () => {
return(
    <div className={style.Pents_Wrapper}>
      <div className={style.Filter}>
        <FilterButton
        brands={PentsBrands}
        variants={PentsVariant}
        pricerange={Price}/>
      </div>
     <div className={style.Pents}>
      {PentData.map(pent => (
    <Cards  
     image={pent.img}
     heading={pent.heading}
     price={pent.price}
     buttonText={pent.buttonText}/>
    ))}
    </div>
    </div>
);
};