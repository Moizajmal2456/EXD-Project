import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { useParams } from 'react-router-dom';
import { AllProductData } from '../../Data';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Counter/counter';

export const AddToCartPage = () => {

  const Count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = AllProductData.find((data) => data.id == id); 

  // const [count, setCount] = useState(1);
  const handleIncrement = () => {
    dispatch(increment());
    // setCount(count + 1)
  }
  const handleDecrement = () => {
    dispatch(decrement());
    // setCount(count - 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.item_section}>
        <div className={styles.item}>
          <div className={styles.item_detail}>
            <div className={styles.img_wrap}>
            <img src={product.img} alt="shirt" />
            </div>
            <div className={styles.text_wrap}>
              <h3>{product.heading}</h3>
              <p>only 6 item in stock</p>
            </div>
          </div>
          <div className={styles.price_detail}>
            <h6 className={styles.Newpri}>{product.price}</h6>
            <del className={styles.pri}>RS.750.00</del>
            <p>50%</p>
          </div>
      <div className={styles.counter}>
        <button className={styles.countBtn}  onClick={handleIncrement}>+</button>
        <span>{Count}</span>
        <button className={styles.countBtn}  onClick={handleDecrement}>-</button>
      </div>
        </div>
      </div>
      <div className={styles.bill_section}>
        <button className={styles.final_btn}>Proceed To Pay</button>
      </div>
    </div>
  );
};