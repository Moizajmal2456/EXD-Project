import style from "./styles.module.scss";
import Bag1 from "../../Images/BagsPic1.webp";
import Bag2 from "../../Images/BagsPic2.jpeg";
import Bag3 from "../../Images/BagsPic3.jpeg";
import Bag4 from "../../Images/BagsPic4.webp";
import { Cards } from "../../Cards/Card/Cards";

export const Bags = () => {
return(
<div className={style.Cards_Wrapper}>
<Cards 
image={Bag1}
heading={"Gents Bag"}
price={"Rs 1550/-"}
buttonText={"Buy"}/>
<Cards 
image={Bag2}
heading={"Gents Bag"}
price={"Rs 1300/-"}
buttonText={"Buy"}/>
<Cards 
image={Bag3}
heading={"Gents Bag"}
price={"Rs 1150/-"}
buttonText={"Buy"}/>
<Cards 
image={Bag4}
heading={"Ladies Bag"}
price={"Rs 1850/-"}
buttonText={"Buy"}/>
</div>
);
};