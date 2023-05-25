import style from "./styles.module.scss";
import Shirt1 from "../../Images/Shirt1.webp";
import Shirt2 from "../../Images/Shirt2.webp";
import Shirt3 from "../../Images/Shirt3.jpg";
import Shirt4 from "../../Images/Shirt4.jpg";
import { Cards } from "../../Cards/Card/Cards";

export const Shirts = () => {
return(
    <div className={style.Shirts_Wrapper} >
      <Cards 
      image={Shirt1}
      heading={"Shirt"}
      price={"Rs 1150/-"}
      buttonText={"Buy"}/>
        <Cards 
      image={Shirt2}
      heading={"Shirt"}
      price={"Rs 1250/-"}
      buttonText={"Buy"}/>
        <Cards 
      image={Shirt3}
      heading={"Shirt"}
      price={"Rs 1650/-"}
      buttonText={"Buy"}/>
        <Cards 
      image={Shirt4}
      heading={"Shirt"}
      price={"Rs 1250/-"}
      buttonText={"Buy"}/>
    </div>
);
};