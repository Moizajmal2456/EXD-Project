import style from "./styles.module.scss";
import { DummyData } from "../Data";
import { OrderCard } from "../Cards/Card/OrderCard/orderCard";
import { useSelector } from "react-redux";

export const Orderdetail = ({Data}) => {

  const Count = useSelector((state) => state.counter);
  const Product = useSelector((state) => state.orderdetail);
  
  const test = () => {
    console.log(Data.prop1);
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
           <div className={style.contactForm}>
             <h2>Contact Details</h2>
               <div className={style.name}>
                 <input type="text" placeholder="First Name"/>
                 <input type="text" placeholder="Last Name"/>
               </div>
               <div className={style.contactDetails}>
                 <input type="email" placeholder="Your Email"/>
                 <input type="number" placeholder="Your Contact Number"/>
               </div>
               <div className={style.address}>
                 <input type="text" placeholder="Your Address"/>
                 <input type="text" placeholder="Postal Code"/>
               </div>
               <div className={style.message}>
                 <textarea type="text" placeholder='Message' rows="5"/>
               </div>
           </div>
        </div>
    );
};