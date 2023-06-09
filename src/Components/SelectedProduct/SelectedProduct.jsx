import React from "react";
import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { AllProductData, ShirtData } from "../../Data";
import { useParams } from "react-router-dom";

export const SelectedProduct = () => {

  const { selectValue} = useParams();
  const productData = AllProductData.find((data) => data.type === selectValue); 
    return (
      <div className={style.Products_Wrapper}>
        {productData.map((shirt) => {
          <Cards
          image={shirt.img}
          heading={shirt.heading}
          price={shirt.price}
          buttonText={shirt.buttonText}
          productID={shirt.id}
        />
      })}
      </div>
    );
  };