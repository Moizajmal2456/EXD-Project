import style from "./styles.module.scss";
import { DummyData } from "../Data";

export const Orderdetail = () => {
    return(
        <div className={style.orderWrapper}>
            <div className={style.allOrders}>
                <div className={style.order}>
                 {/* {DummyData.map(product => {
                  return(
                    <img src={product.img} alt="Shoes"/>,
                    <p>Price: {product.price}</p>,
                    <p>Quantity: {product.quantity}</p>
                 )})} */}
                    <img src="../Images/Shoes3.jpg" alt="Shoes"/>
                    <p>Price: 200</p>
                    <p>Quantity: 2</p>
                    <img src="../Images/Shoes3.jpg" alt="Shoes"/>
                    <p>Price: 200</p>
                    <p>Quantity: 2</p>
                    <img src="../Images/Shoes3.jpg" alt="Shoes"/>
                    <p>Price: 200</p>
                    <p>Quantity: 2</p>
                </div>
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