import { Cards } from "../../Cards/Card/Cards";
import style from "./styles.module.scss";
import Shoes1 from "../../Images/Shoes1.webp";
import Shoes2 from "../../Images/Shoes2.webp";
import Shoes3 from "../../Images/Shoes3.jpg";
import Shoes4 from "../../Images/Shoes4.webp";

export const Shoes = () => {
return( 
    <div className={style.Shoes_Wrapper}>
    <Cards
      image={Shoes1}
      heading={" Lophers"}
      price={"Rs 1600/-"}
      buttonText={"Buy"}/>
       <Cards
      image={Shoes3}
      heading={"Skin Shoes"}
      price={"Rs 2100/-"}
      buttonText={"Buy"}/>
       <Cards
      image={Shoes2}
      heading={"Leather Shoes"}
      price={"Rs 3500/-"}
      buttonText={"Buy"}/>
       <Cards
      image={Shoes4}
      heading={"Ladies Shoes"}
      price={"Rs 1800/-"}
      buttonText={"Buy"}/>
    </div>
);
};