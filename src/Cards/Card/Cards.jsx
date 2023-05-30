import style from "./styles.module.scss";

export const Cards = ({image , heading , price , buttonText}) => {
return(
<div className={style.Cards}>
<img src={image} alt="Bag pic"/>
<h4>{heading}</h4>
<p>{price}</p>
<a href="${}">
<button className={style.Button}>{buttonText}</button>
</a>
</div>
);
};