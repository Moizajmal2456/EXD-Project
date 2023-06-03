import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { AllProductData } from '../../Data';
import { Link, useParams } from 'react-router-dom';

export const Detail = () => {

  const [count, setCount] = useState(1);
  const handleIncrement = () =>{
    setCount(count+1)
  }
  const handleDecrement = () =>{
    setCount(count-1)
  }
  
  const { id } = useParams();
  const product = AllProductData.find((m) => m.id == id);

  return (
    <div className={styles.container}>
        <div className={styles.image}>
          <img src={product.img} alt="Shirt" />
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
        <button className={styles.countBtn} onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button className={styles.countBtn} onClick={handleDecrement}>-</button>
        </div>
        <div className='text-center d-block mb-3 pb-3'>
          <Link to="/addtocartpage">
          <button className={styles.btn}>Add To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};