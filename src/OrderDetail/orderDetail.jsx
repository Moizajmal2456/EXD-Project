import style from "./styles.module.scss";
import { DummyData } from "../Data";
import { OrderCard } from "../Cards/Card/OrderCard/orderCard";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Orderdetail = ({Data}) => {

  const location = useLocation();
  const dataToSend = location.state;
  const Count = useSelector((state) => state.counter);
  const Product = useSelector((state) => state.orderdetail);
  
  const test = () => {
    console.log(location);
    console.log(dataToSend);
  }
  return(
 <div className={style.orderWrapper}>
     <div className={style.allOrders}>
        {/* <img src={productImg} alt="product image"/>
        <p>{price}</p>
        <p>{quantity}</p> */}
        {DummyData.map(data => {
        return(
        <OrderCard
        id={data.id}
        image={data.img}
        price={data.price}
        quantity={data.quantity}/>
        )})}
        {/* <button onClick={test}>Test</button> */}
      </div>
      <div className={style.formWrapper}>
        <div className={style.contactForm}>
          <h2>Contact Details</h2>
          <input className={style.input} type="text" placeholder="First Name"/>
          <input className={style.input} type="text" placeholder="Last Name"/>
          <input className={style.input} type="email" placeholder="Your Email"/>
          <input className={style.input} type="number" placeholder="Your Contact Number"/>
          <input className={style.input} type="text" placeholder="Your Address"/>
          <input className={style.input} type="text" placeholder="Postal Code"/>
          <textarea className={style.input} type="text" placeholder='Message' rows="5"/>
       </div>
       <div className={style.image}>
         <img src="/Images/Contact Us.jpeg" alt="" />
       </div>
     </div>
  </div>
);
};