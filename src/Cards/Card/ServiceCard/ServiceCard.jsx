import React from "react";
import style from "./styles.module.scss";

export const ServiceCards = ({heading , paragraph, buttonText}) => {
return(
    <div className={style.CardsWrapper}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <button>{buttonText}</button>
    </div>
);
}