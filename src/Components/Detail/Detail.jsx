import React from 'react';
import styles from "./styles.module.scss";

export const DetailPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_block}>
        <div className={styles.img}>
          <img src="/Images/Shirt1.webp" alt="Shirt" />
        </div>
      </div>
      <div className={styles.text_block}>
        <h1>PRINTED BLUE TSHIRT</h1>
        <p>T-shirt</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Minima aspernatur, voluptas maxime tempora blanditiis quidem
          esse quas dolores officiis et est natus molestias rerum
          nisi ipsa voluptatem possimus. Minima, praesentium?
        </p>
        <p className={styles.stars}>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </p>
        <b>Price : £35.00</b>
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