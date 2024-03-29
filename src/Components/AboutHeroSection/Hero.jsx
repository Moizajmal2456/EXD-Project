import React from 'react';
import styles from "./styles.module.scss";
import AboutServices from '../AboutService/AboutService';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about_header}>
        <div className={styles.header_image}>
          <img src="https://img.freepik.com/premium-photo/black-tshirt-pretty-girl-clothing-baby-clothes-cute-child-background_300849-2046.jpg?w=2000" alt="Header image" />
        </div>
        <div className={styles.header_text_section}>
          <h2>Welcome to E-Commerace</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
        </div>
      </div>
     <AboutServices/>
    </div>
  );
};
export default AboutPage;