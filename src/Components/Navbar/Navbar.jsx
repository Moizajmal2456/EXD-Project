import { Link } from "react-router-dom";
import AddCart from "../../Images/Addtocart.png";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }
return(
    <div className={styles.Navbar_Wrapper}>
     <div className={styles.Left_Section}>
        <ul>
            <li className={styles.Home}>
            <Link to="/">Home</Link>
            </li>
            <div className={styles.Select_Wrapper}>
            <select>
                <option value="Product">Select Product</option>
                <option value="Shirt">Shirts</option>
                <option value="Pents">Pents</option>
                <option value="Bags">Bags</option>
                <option value="Shoes">Shoes</option>
            </select>
            </div>
            <li>Blogs</li>
            <li className={styles.Home}>
            <Link to="/contactus">Contact Us</Link>
            </li>
            <li className={styles.Home}>
            <Link to="/aboutus">About Us</Link>
            </li>
        </ul>
     </div>
     <div className={styles.Right_Section}>
        <button>
        <Link to="/login">Login </Link>
        </button>
        <img src={AddCart} alt="Add to cart"/>
     </div>
    </div>
);
};