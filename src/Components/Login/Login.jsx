import { useState } from "react";
import style from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const navigate = useNavigate();
    const handleLogin = async ( email , password) => {
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "access-token":"dummytoken",
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
          const data = await response.json();
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          const error = await response.text();
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    
    const handleEmailChange = ( event) => {
      setEmail(event.target.value);
    };

    const handlePasswordChange = ( event ) => {
     setPassword(event.target.value)
    };

return(
    <div className={style.Signup_Wrapper}>
     <div className={style.Input_Fields}>
        <h2>Login to your account</h2>
        <h4>Welcome back!</h4>
        <input className={style.Email} type="string" required placeholder=" Enter Email" onChange={handleEmailChange}/>
        <input className={style.Email} type="string" required placeholder="Enter Password" on onChange={handlePasswordChange}/>
        <button className={style.Button} type="submit">Login</button>
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