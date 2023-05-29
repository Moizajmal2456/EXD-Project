import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { ShirtData } from "../../Data";

export const Shirts = () => {
return(
    <div className={style.Shirts_Wrapper} >
     {ShirtData.map(shirt => (
         <Cards  
         image={shirt.img}
         heading={shirt.heading}
         price={shirt.price}
         buttonText={shirt.buttonText}/>
         ))}
    </div>
);
};