import { Cards } from "../../Cards/Card/Cards";
import style from "./styles.module.scss";
import Pent1 from "../../Images/Pent1.jpg";
import Pent2 from "../../Images/Pent2.jpg";
import Pent3 from "../../Images/Pent3.webp";
import Pent4 from "../../Images/Pent4.jpg";

export const Pents = () => {
return(
    <div className={style.Pents_Wrapper}>
        <Cards 
          image={Pent1}
          heading={"Line Pent"}
          price={"Rs 1550/-"}
          buttonText={"Buy"}/>
        <Cards 
          image={Pent2}
          heading={"Jeans Cotton"}
          price={"Rs 1550/-"}
          buttonText={"Buy"}/>
        <Cards 
          image={Pent3}
          heading={"Jeans Pent"}
          price={"Rs 1550/-"}
          buttonText={"Buy"}/>
        <Cards 
          image={Pent4}
          heading={"Trousers"}
          price={"Rs 1550/-"}
          buttonText={"Buy"}/>
    </div>
);
};