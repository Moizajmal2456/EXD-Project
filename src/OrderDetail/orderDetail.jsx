import style from "./styles.module.scss";
import { DummyData } from "../Data";
import { OrderCard } from "../Cards/Card/OrderCard/orderCard";

export const Orderdetail = () => {
    return(
        <div className={style.orderWrapper}>
            <div className={style.allOrders}>
                 {DummyData.map(product => {
                   return(
                  <OrderCard
                  id={product.id}
                  image={product.img}
                  price={product.price}
                  quantity={product.quantity}/>
                  )})}
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