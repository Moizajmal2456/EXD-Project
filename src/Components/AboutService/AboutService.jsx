import React from 'react';
import styles from "./styles.module.scss";
import AboutServiceItem from '../AboutServiceItem/AboutServiceItem';
import { ServiceData } from '../../Data';
import { ServiceCards } from '../../Cards/Card/ServiceCard/ServiceCard';
const AboutServices = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.text_heading}>
        <h2>What We Provide?</h2>
        <div>
          <img src="	https://cdn.shopify.com/s/files/1/0652/4570/8532/files/wave.png?v=1659606064&width=150" alt="" />
        </div>
      </div>
      <div className={styles.services_section}>
          {ServiceData.map(service => {
            return(
              <ServiceCards
              heading={service.heading}
              paragraph={service.text}
              buttonText={service.btnText}
              />
            )
          })}
      </div>
    </div>
  )
}

export default AboutServices;