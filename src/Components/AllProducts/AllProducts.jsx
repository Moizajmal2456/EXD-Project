import { Cards } from "../../Cards/Card/Cards";
import style from "./styles.module.scss";
import { AllProductData } from "../../Data";

export const Products = () => {
return(
  <div className={style.Products_Wrapper}>
    {AllProductData.map(product => {
    return( 
     <Cards  
     image={product.img}
     heading={product.heading}
     price={product.price}
     buttonText={product.buttonText}
     productID={product.id}/>
      )
     }
    )
   }
 </div>
);
};