import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Navbar = () => {

    const handleOptionSelected = (event) => {
        const productType = event.target.value;
        if (productType === 'Shirt') {
            window.location.href =`/selectedproduct/${productType}`;
        } else if (productType === 'Pent') {
            window.location.href =`/selectedproduct/${productType}`;
        } else if (productType === 'Bag') {
            window.location.href =`/selectedproduct/${productType}`;
        } else if (productType === 'Shoe'){
             window.location.href =`/selectedproduct/${productType}`;
        } else {
            window.location.href = "/";
        }
    }
return(
<div className={styles.Navbar_Wrapper}>
  <div className={styles.Left_Section}>
        <ul onChange={handleOptionSelected}> 
            <li className={styles.Home}>
             <Link to="/">Home</Link>
            </li>
            <li className={styles.Home}>
             <Link to="/contactus">Contact Us</Link>
            </li>
            <li className={styles.Home}>
             <Link to="/aboutus">About Us</Link>
            </li>
            <li className={styles.Home}>
             <Link to="/selectedproduct/Shirt">Shirts</Link>
            </li>
            <li className={styles.Home}>
             <Link to="/selectedproduct/Pent">Pents</Link>
            </li>
            <li className={styles.Home}>
             <Link to="/selectedproduct/Bag">Bags</Link>
            </li>
            <li className={styles.Home}>
             <Link to="/selectedproduct/Shoe">Shoes</Link>
            </li>
        </ul>
  </div>
  <div className={styles.Right_Section}>
      <button>
        <Link to="/login">Login </Link>
      </button>
      <i className="fa-solid fa-cart-shopping"></i>
  </div>
</div>
);
};