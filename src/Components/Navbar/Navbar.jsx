import { Link } from "react-router-dom";
import AddCart from "../../Images/Addtocart.png";
import styles from "./styles.module.scss";

export const Navbar = () => {
return(
    <div className={styles.Navbar_Wrapper}>
     <div className={styles.Left_Section}>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>About Us</li>
        </ul>
     </div>
     <div className={styles.Right_Section}>
        <Link to="/login">
        <button>Login</button>
        </Link>
        <img src={AddCart} alt="Add to cart"/>
     </div>
    </div>
);
};