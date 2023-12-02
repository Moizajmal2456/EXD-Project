import style from "./styles.module.scss";
import { Cards } from "../../Cards/Card/Cards";
import { AllProductData, BagsBrands, BagsVariant, PentsBrands, PentsVariant, Price, ShirtsBrands, ShirtsVariant, ShoesBrands, ShoesVariant} from "../../Data";
import { useParams } from "react-router-dom";
import { FilterButton } from "../Filtering/FilterButton";
import { useSelector } from "react-redux";

export const SelectedProduct = () => {
  const allProductData = [...AllProductData];
  const { productType } = useParams();
  const productData = allProductData.filter((data) => data.productType === productType)
  .filter((data) => brands ? data.brand === brands : true);
  // .filter((data) => variants ? data.variant === variants : true)
  // .filter((data) => price ? (data.price >= price.min && data.price <= price.max) : true); 
  
  const {brands , variants , price} = useSelector((state) => state.filter);
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
    />) })}
  </div>
</div>
);
};