import { Cards } from "../../Cards/Card/Cards";
import style from "./styles.module.scss";
import { PentData } from "../../Data";

export const Pents = () => {
return(
    <div className={style.Pents_Wrapper}>
      {PentData.map(pent => (
    <Cards  
     image={pent.img}
     heading={pent.heading}
     price={pent.price}
     buttonText={pent.buttonText}/>
    ))}
    </div>
);
};