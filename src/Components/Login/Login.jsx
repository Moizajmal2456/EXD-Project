import style from "./styles.module.scss";
import Email from "../../Images/email.svg";
import Facebook from "../../Images/facebook.svg";
import Google from "../../Images/google.svg";
import { Link } from "react-router-dom";

export const Login = () => {
return(
    <div className={style.Signup_Wrapper}>
     <div className={style.Input_Fields}>
        <h2>Login to your account</h2>
        <h4>Welcome back!</h4>
        <input className={style.Email} type="string" required placeholder=" Enter Email"/>
        <input className={style.Email} type="string" required placeholder="Enter Password"/>
        <button className={style.Button}>Login</button>
        <div className={style.Forgot}>
        <Link to="/forgotpassword">
         <h4>Forgot Password?</h4>
        </Link>
        </div>
         <div className={style.Or}>
         <div className={style.Line}></div>
         <div className={style.Text}><p>OR</p></div>
         <div className={style.Line}></div>
         </div>
        <button className={style.Button}> <img src={Facebook} alt="facebook icon"/>Continue with Facebook</button>
        <button className={style.Button}> <img src={Google} alt="google icon"/>Continue with Google</button>
        <button className={style.Button}> <img src={Email} alt="email icon"/>Continue with Email</button>
        <div className={style.Register}>
        <h4><u>Don't have an account? Register Now</u></h4>
        <Link to="/signin">
        <button className={style.Button}>Signin</button>
        </Link>
        </div>
     </div>
    </div>
);
};