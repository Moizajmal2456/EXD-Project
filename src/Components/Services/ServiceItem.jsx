import React from 'react';
import styles from "./ServiceItem.module.scss";

const ServiceItem = () => {
  return (
    <>
    <div className={styles.card_col}>
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_icon}>
                    <span className={styles.icon}>
                     <i class="fas fa-shipping-fast"></i>
                    </span>
                </div>
                <div className={styles.card_text}>
                    <h4>Fast Delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.card_col}>
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_icon}>
                    <span className={styles.icon}>
                     <i class="fas fa-shipping-fast"></i>
                    </span>
                </div>
                <div className={styles.card_text}>
                    <h4>Reliability</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.card_col}>
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_icon}>
                    <span className={styles.icon}>
                     <i class="fas fa-shipping-fast"></i>
                    </span>
                </div>
                <div className={styles.card_text}>
                    <h4>Easy Exchange</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.card_col}>
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_icon}>
                    <span className={styles.icon}>
                     <i class="fas fa-shipping-fast"></i>
                    </span>
                </div>
                <div className={styles.card_text}>
                    <h4>Live Tracking</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
export default ServiceItem;