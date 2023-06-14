import React from "react";
import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { AllProductData, filterData} from "../../Data";
import { useParams } from "react-router-dom";
import { FilterButton } from "../Filtering/FilterButton";

export const SelectedProduct = () => {

  const allProductData = [...AllProductData];
  // const filtersData = [...filterData];
  const { productType } = useParams();
  const productData = allProductData.filter((data) => data.productType === productType); 
  const filtersData = filterData.filter((data) => data.productType === productType);
  console.log(productData);
    return (
    <div className={style.Filters_Warpper}>
      <div className={style.Filters}>
        {filtersData.map((obj) => {
          return(
            <FilterButton 
            id={obj.id}
            brands={obj.brandName}
            variants={obj.variantName}
            pricerange={obj.price}/>
          )
        })}
      </div>
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
    </div>
    );
  };