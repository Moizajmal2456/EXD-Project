import { useState } from "react";
import style from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [userName , setUserName] = useState();
    const [email , setEmail] = useState();
    const [mobile , setMobile] = useState();
    const [password , setPassword] = useState();

  const navigate = useNavigate();
  const handleSignUp = async ({userName , email , mobile , password}) => {
    try{
      const response = await fetch('/signup' , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName , email , mobile , password}),
      });

      if(response.ok){
        const data = await response.json();
        localStorage.setItem("access-token" , response.accessToken);
        setTimeout(() => {
          navigate("/");
        } , 3000);
      }
      else{
        const error = await response.text();
      }
      }
      catch (error) {
        console.log("An error occured" , error);
      }
    }

return(
<div className={style.SignIn_Wrapper}>
<div className={style.Input_Fields}>
<h2>Signin to your account</h2>
<input className={style.Email} type="string" placeholder="UserName"/>
<input className={style.Email} type="string" placeholder="Email"/>
<input className={style.Email} type="Number" placeholder="Mobile Number"/>
<input className={style.Email} type="password" placeholder="Password"/>
<button className={style.Button} onClick={handleSignUp}>Sign In</button>
</div>
</div>
);
};