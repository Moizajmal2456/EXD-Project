import style from "./styles.module.scss";

export const Cards = ({image , heading , price , buttonText}) => {
return(
<div className={style.Cards}>
<img src={image} alt="Bag pic"/>
<h4>{heading}</h4>
<p>{price}</p>
<button className={style.Button}>{buttonText}</button>
</div>
);
};