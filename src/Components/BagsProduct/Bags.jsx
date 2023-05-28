import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { BagData } from "../../Data";

export const Bags = () => {
return(
<div className={style.Cards_Wrapper}>
{BagData.map(product => (
<Cards 
image={product.img}
heading={product.heading}
price={product.price}
buttonText={product.buttonText}/>
))}
</div>
);
};