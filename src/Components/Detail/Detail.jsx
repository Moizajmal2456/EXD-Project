import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { AllProductData } from '../../Data';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Counter/counter';

export const Detail = () => {

  const Count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const handleIncrement = () =>{
    dispatch(increment());
    // setCount(count+1)
  }
  const handleDecrement = () =>{
    dispatch(decrement());
    // setCount(count-1)
  }
  
  const { id } = useParams();
  const product = AllProductData.find((m) => m.id == id);

  return (
    <div className={styles.container}>
        <div className={styles.image}>
          <img src={product.img} alt="Shirt" />
        </div>
      <div className={styles.text_block}>
        <h1>{product.heading}</h1>
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
         <span>{Count}</span>
         <button className={styles.countBtn} onClick={handleDecrement}>-</button>
        </div>
        <div className='text-center d-block mb-3 pb-3'>
          <Link to ={`/addtocartpage/${id}`}>
          <button className={styles.btn}>Add To Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};