import { useState } from "react";
import style from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    
    const navigate = useNavigate();

    const handleEmailChange = ( event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = ( event ) => {
     setPassword(event.target.value)
    };
    
    const Login = async () => {
      try {
        const response = await axios.post('http://localhost:4000/login', {
        email , password
        });
       console.log(response);
          const accessToken = await response.data.token;
          localStorage.setItem("accesstoken" , accessToken);
      } catch (error) {
        // console.error('An error occurred:', error);
        alert(error);
      }
    };


return(
    <div className={style.Signup_Wrapper}>
     <div className={style.Input_Fields}>
        <h2>Login to your account</h2>
        <h4>Welcome back!</h4>
        <input className={style.Email} type="string" name="email" required placeholder=" Enter Email" onChange={handleEmailChange}/>
        <input className={style.Email} type="string" name="password" required placeholder="Enter Password" onChange={handlePasswordChange}/>
        <button className={style.Button} type="submit" onClick={Login}>Login</button>
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
        <button className={style.Button}> <img src="/Images/facebook.svg" alt="facebook icon"/>Continue with Facebook</button>
        <button className={style.Button}> <img src="/Images/google.svg" alt="google icon"/>Continue with Google</button>
        <button className={style.Button}> <img src="/Images/email.svg" alt="email icon"/>Continue with Email</button>
        <div className={style.Register}>
        <h4><u>Don't have an account? Register Now</u></h4>
        <Link to="/signin">
        <button className={style.Button}>Signup</button>
        </Link>
        </div>
     </div>
    </div>
);
};