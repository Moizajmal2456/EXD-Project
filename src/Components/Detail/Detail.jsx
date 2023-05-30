import React from 'react';
import styles from "./styles.module.scss";
import { AllProductData } from '../../Data';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  
  const { id } = useParams();
  const product = AllProductData.find((m) => m.id == id);

  return (
    <div className={styles.container}>
      <div className={styles.img_block}>
        <div className={styles.img}>
          <img src={product.img} alt="Shirt" />
        </div>
      </div>
      <div className={styles.text_block}>
        <h1>PRINTED BLUE TSHIRT</h1>
        <p>{product.heading}</p>
        <p>{product.text}</p>
        <p className={styles.stars}>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>
        <b>Price{product.price}</b>
        <div className={styles.counter}>
        <button className={styles.countBtn}>+</button>
        <span>0</span>
        <button className={styles.countBtn}>-</button>
        </div>
        <div className='text-center d-block mb-3 pb-3'>
          <button className={styles.btn}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};