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
  //   return(<FilterButton brands={ShoesBrands}
  //  variants={ShoesVariant}
  //  pricerange={Price}/>)
  console.log(ShoesBrands);
  }
  else if(productType === "Pent"){
    // return(<FilterButton brands={PentsBrands}
    // variants={PentsVariant}
    // pricerange={Price}/>)
    // console.log(PentsBrands);
   }
   else if(productType === "Bag"){
    // return(<FilterButton brands={BagsBrands}
    // variants={BagsVariant}
    // pricerange={Price}/>) 
    // console.log(BagsBrands);
   }
   else {
    // return(<FilterButton brands={ShirtsBrands}
    // variants={ShirtsVariant}
    // pricerange={Price}/>)
    // console.log(ShoesBrands);
   }
  };
    return (
    <div className={style.Filters_Warpper}>
      <div className={style.Filters}>
      
      </div>
      <div className={style.Products_Wrapper}>
        {productData.map((obj) => {
          return(
          filtersData(),
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