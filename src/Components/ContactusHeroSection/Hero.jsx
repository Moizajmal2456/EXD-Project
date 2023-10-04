import React from 'react';
import style from "./styles.module.scss";

export const ContactPage = () => {
  return (
    <>
    <div className={style.Contact_Wrapper}>
      <div className={style.Left_Section}>
        <h2>Contact form</h2>
        <h4>Drop Us a Line</h4>
        <p>Your email address will not be published. Required fields are marked *</p>
        <div className={style.name}>
         <input className={style.Email} type="text" placeholder='Enter Name'/>
         <input className={style.Email} type="email" placeholder='Enter Email'/>
        </div>
        <div className={style.tel}>
         <input className={style.Email} type="tel" placeholder='Enter Mobile Number'/>
         <input className={style.Email} type="text" placeholder='Subject'/>
        </div>
          <textarea className={style.Email} type="text" placeholder='Message' rows="10"/>
      </div>
      <div className={style.Right_Section}>
        <img src="/Images/Contact Us.jpeg" alt="" />
      </div>
    </div>
    <div className={style.Button}>
     <button>Submit</button>
    </div>
     </>
  );
};

