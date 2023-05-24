import style from "./styles.module.scss";
import { Button } from "../Button/Button";
import Email from "../../Images/email.svg";
import Facebook from "../../Images/facebook.svg";
import Google from "../../Images/google.svg";

export const Login = () => {
return(
    <div className={style.Signup_Wrapper}>
     <div className={style.Input_Fields}>
        <h2>Login to your account</h2>
        <h4>Welcome back!</h4>
        <input type="string" required placeholder=" Enter Email"/>
        <input type="string" required placeholder="Enter Password"/>
        <Button title={"LOGIN"} type={"secondary"}/>
        <div className={style.Forgot}>
         <h4>Forgot Password?</h4>
        </div>
         <div className={style.Or}>
         <div className={style.Line}></div>
         <div className={style.Text}><p>OR</p></div>
         <div className={style.Line}></div>
         </div>
        <button > <img src={Facebook} alt="facebook icon"/>Continue with Facebook</button>
        <button> <img src={Google} alt="google icon"/>Continue with Google</button>
        <button> <img src={Email} alt="email icon"/>Continue with Email</button>
        <div className={style.Register}>
        <h4><u>Don't have an account? Register Now</u></h4>
        <button></button>
        </div>
     </div>
    </div>
);
};