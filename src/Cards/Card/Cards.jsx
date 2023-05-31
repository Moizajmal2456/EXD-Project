import { Link } from "react-router-dom";
import style from "./styles.module.scss";

export const Cards = ({image , heading , price , buttonText , productID}) => {
return(
<div className={style.Cards}>
<img src={image} alt="Bag pic"/>
<h4>{heading}</h4>
<p>{price}</p>
<div className={style.Button_Wrap}>
<Link to={`/detailpage/${productID}`}>
<button className={style.Button}>{buttonText}</button>
</Link>
</div>
</div>
);
};