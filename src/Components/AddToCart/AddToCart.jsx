import React from 'react';
import styles from "./styles.module.scss";

export const AddToCartPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item_section}>
        <div className={styles.item}>
          <div className={styles.item_detail}>
            <div className={styles.img_wrap}>
            <img src="/Images/Shirt3.jpg" alt="shirt" />
            </div>
            <div className={styles.text_wrap}>
              <h3>PRINTED BLUE TSHIRT</h3>
              <p>T-Shirt</p>
              <p>only 6 item in stock</p>
            </div>
          </div>
          <div className={styles.price_detail}>
            <h6 className={styles.Newpri}>RS.350.00</h6>
            <del className={styles.pri}>RS.750.00</del>
            <p>50%</p>
          </div>
      <div className={styles.counter}>
        <button className={styles.countBtn}>+</button>
        <span>0</span>
        <button className={styles.countBtn}>-</button>
      </div>
        </div>
      </div>
      <div className={styles.bill_section}>
        <button className={styles.final_btn}>Proceed To Pay</button>
      </div>
    </div>
  );
};