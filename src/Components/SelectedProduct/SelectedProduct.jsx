// import React from 'react';
// import style from "./styles.module.scss";
// import { Cards } from "../../Cards/Card/Cards";
// import { AllProductData, filterData} from "../../Data";
// import { useParams } from "react-router-dom";

// export const SelectedProduct = () => {
//   // const [productData, setProductData] = useState([]);

//   const allProductData = [...AllProductData];
//   const { productType } = useParams();
//   const productData = allProductData.filter((data) => data.productType === productType);
//   const filters = filterData.filter((data) => data.productType === productType);

//  const handleBrandsChange = (event) => {
//  const selectedBrand = event.target.value;
//  const filteredBrand = allProductData.filter((data) => data.brand === selectedBrand);
//  productData.push(" ");
//  productData.push(filteredBrand);
//  }

//  const handleVariantsChange = (event) => {
//   const selectedVariant = event.target.value;
//   const filteredVariants = allProductData.filter((data) => data.variant === selectedVariant);
//   productData.push(" ");
//   productData.push(filteredVariants);
//  }

//  const handlePriceChange = (event) => {
//   const selectedPrice = event.target.value;
//   const filteredPrice = allProductData.filter((data) => data.price === selectedPrice);
//   productData.push(" ");
//   productData.push(filteredPrice);
//  }

// return (
// <div className={style.Filters_Warpper}>
//   <div className={style.Filters}>
//     <div className={style.BrandFilter}>
//       <select id="brands-sorting" onChange={handleBrandsChange} >
//         {filters.map((brand) => {
//           return(
//             <option key={brand.id} value={brand.brandName}>{brand.brandName}</option>
//           )
//         })}
//       </select>
//     </div>
//     <div className={style.VariantFilter}>
//       <select id="variants-sorting" onChange={handleVariantsChange}>
//         {filters.map((variant) => {
//          return(
//             <option key={variant.id} value={variant.variantName}>{variant.variantName}</option>
//           )
//         })}
//       </select>
//     </div>
//     <div className={style.PriceFilter}>
//       <select id="price-sorting" onChange={handlePriceChange} >
//         {filters.map((price) => {
//           return(
//             <option key={price.id} value={price.price}>{price.price}</option>
//           )
//         })}
//       </select>
//     </div>
//   </div>
//   <div className={style.Products_Wrapper}>
//     {productData.map((obj) => {
//     return(
//     <Cards
//       image={obj.img}
//       heading={obj.heading}
//       price={obj.price}
//       buttonText={obj.buttonText}
//       productID={obj.id}
//       star={obj.stars}
//     />) })}
//   </div>
// </div>
// );
// };


import React, { useState, useEffect } from 'react';
import style from './styles.module.scss';
import { Cards } from '../../Cards/Card/Cards';
import { AllProductData, filterData } from '../../Data';
import { useParams } from 'react-router-dom';

export const SelectedProduct = () => {
  const [brands, setBrands] = useState('');
  const [variants, setVariants] = useState('');
  const [price, setPrice] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const allProductData = [...AllProductData];
  const { productType } = useParams();
  const filters = filterData.filter((data) => data.productType === productType);

  const handleBrandsChange = (event) => {
    setBrands(event.target.value);
  };

  const handleVariantsChange = (event) => {
    setVariants(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    // Your filtering logic
    const filteredData = allProductData.filter((data) => {
      const isProductTypeMatch = data.productType === productType;
      const isBrandMatch = brands ? data.brand === brands : true;
      const isVariantMatch = variants ? data.variant === variants : true;
      const isPriceMatch = price ? data.price === price : true;

      return isProductTypeMatch && isBrandMatch && isVariantMatch && isPriceMatch;
    });

    // Update the state with the filtered data
    setFilteredData(filteredData);
  }, [productType, brands, variants, price]);

  return (
    <div className={style.Filters_Warpper}>
      <div className={style.Filters}>
        <div className={style.BrandFilter}>
          <select id="brands-sorting" onChange={handleBrandsChange}>
            {filters.map((brand) => (
              <option key={brand.id} value={brand.brandName}>
                {brand.brandName}
              </option>
            ))}
          </select>
        </div>
        <div className={style.VariantFilter}>
          <select id="variants-sorting" onChange={handleVariantsChange}>
            {filters.map((variant) => (
              <option key={variant.id} value={variant.variantName}>
                {variant.variantName}
              </option>
            ))}
          </select>
        </div>
        <div className={style.PriceFilter}>
          <select id="price-sorting" onChange={handlePriceChange}>
            {filters.map((price) => (
              <option key={price.id} value={price.price}>
                {price.price}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={style.Products_Wrapper}>
        {filteredData.map((obj) => (
          <Cards
            key={obj.id}
            image={obj.img}
            heading={obj.heading}
            price={obj.price}
            buttonText={obj.buttonText}
            productID={obj.id}
            star={obj.stars}
          />
        ))}
      </div>
    </div>
  );
};
