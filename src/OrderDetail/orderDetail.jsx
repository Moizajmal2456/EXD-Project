import style from "./styles.module.scss";

export const Orderdetail = () => {
    return(
        <>
        <div className={style.contactForm}>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Your Email"/>
        <input type="text" placeholder="Your Address"/>
        <input type="text" placeholder="Postal Code"/>
        <input type="number" placeholder="Your Contact Number"/>
        <textarea type="text" placeholder='Message' rows="5"/>
        </div>
        </>
    );
};