import { Cards } from "../../Cards/Card/Cards";
import style from "./styles.module.scss";
import { ShoesData } from "../../Data";
import { ShoesBrands } from "../../Data";
import { ShoesVariant } from "../../Data";
import { Price } from "../../Data";
import { FilterButton } from "../Filtering/FilterButton";

export const Shoes = () => {
return( 
    <div className={style.Shoes_Wrapper}>
    {ShoesData.map(shoe => (
    <Cards  
     image={shoe.img}
     heading={shoe.heading}
     price={shoe.price}
     buttonText={shoe.buttonText}/>
    ))}
    </div>
);
};