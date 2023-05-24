import { Link } from "react-router-dom";
import AddCart from "../../Images/Addtocart.png";
import styles from "./styles.module.scss";

export const Navbar = () => {
return(
    <div className={styles.Navbar_Wrapper}>
     <div className={styles.Left_Section}>
        <ul>
            <li className={styles.Home}>
            <Link to="/">Home</Link>
            </li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>About Us</li>
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