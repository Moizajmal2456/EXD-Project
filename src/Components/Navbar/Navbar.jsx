import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Navbar = () => {
  
    const handleOptionSelected = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'Shirt') {
          window.location.href = "/shirtspage";
        } else if (selectedOption === 'Pents') {
            window.location.href = "/pentspage";
        } else if (selectedOption === 'Bags') {
            window.location.href = "/bagspage";
        } else if (selectedOption === 'Shoes'){
            window.location.href = "/shoespage";
        } else {
            window.location.href = "/";
        }
    }
return(
    <div className={styles.Navbar_Wrapper}>
     <div className={styles.Left_Section}>
        <ul>
            <li className={styles.Home}>
            <Link to="/">Home</Link>
            </li>
            <div className={styles.Select_Wrapper}>
            <select onChange={handleOptionSelected}>
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
        <Link to="/detailpage">
        <img src="/Images/Addtocart.jpg" alt="Add to cart"/>
        </Link>
     </div>
    </div>
);
};