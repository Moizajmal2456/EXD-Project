import React from "react";
import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { AllProductData, BagsBrands, BagsVariant, PentsBrands, PentsVariant, Price, ShirtsBrands, ShirtsVariant, ShoesBrands, ShoesVariant, filterData} from "../../Data";
import { useParams } from "react-router-dom";
import { FilterButton } from "../Filtering/FilterButton";

export const SelectedProduct = () => {
  const allProductData = [...AllProductData];
  // const filtersData = [...filterData];
  const { productType } = useParams();
  const productData = allProductData.filter((data) => data.productType === productType); 
  // const filtersData = filterData.filter((data) => data.productType === productType);

  const filtersData = () => {
  if(productType === "Shoe"){
    return(<div><FilterButton brands={ShoesBrands}
     variants={ShoesVariant}
     pricerange={Price}/></div>)
  }
  else if(productType === "Pent"){
    return(<div><FilterButton brands={PentsBrands}
    variants={PentsVariant}
    pricerange={Price}/></div>)
   }
   else if(productType === "Bag"){
    return(<FilterButton brands={BagsBrands}
    variants={BagsVariant}
    pricerange={Price}/>) 
   }
   else {
    return(<div><FilterButton brands={ShirtsBrands}
    variants={ShirtsVariant}
    pricerange={Price}/></div>)
   }
  };
    return (
    <div className={style.Filters_Warpper}>
      <div className={style.Filters}>
      {filtersData()}
      </div>
      <div className={style.Products_Wrapper}>
        {productData.map((obj) => {
          return(
          <Cards
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