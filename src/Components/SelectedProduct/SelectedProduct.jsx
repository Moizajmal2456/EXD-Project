import React from "react";
import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { AllProductData} from "../../Data";
import { useParams } from "react-router-dom";

export const SelectedProduct = () => {

  const allProductData = [...AllProductData];
  const { productType } = useParams();
  const productData = allProductData.filter((data) => data.productType === productType); 
  console.log(productData);
    return (
      <div className={style.Products_Wrapper}>
        {productData.map((obj) => {
          return(<Cards
            image={obj.img}
            heading={obj.heading}
            price={obj.price}
            buttonText={obj.buttonText}
            productID={obj.id}
          />)
        })}
      </div>
    );
  };