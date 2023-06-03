import { useEffect, useState } from "react";
import style from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
    const [userName , setUserName] = useState();
    const [email , setEmail] = useState();
    const [mobile , setMobile] = useState();
    const [password , setPassword] = useState();

  const navigate = useNavigate();

  const handleSignup = async () => {
    useEffect(() => {
      axios
      .post(`${process.env.REACT_APP_API_URL}/signup`, {
        userName: userName,
        email: email,
        mobileNo: mobile,
        password: password,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
    });
  }

  const handleNameChange = ( event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = ( event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = ( event) => {
    setMobile(event.target.value);
  };
 
  const handlePasswordChange = ( event ) => {
   setPassword(event.target.value)
  };

return(
<div className={style.SignIn_Wrapper}>
<div className={style.Input_Fields}>
<h2>Signup to your account</h2>
<input className={style.Email} type="string" placeholder="UserName" onClick={handleNameChange}/>
<input className={style.Email} type="string" placeholder="Email" onClick={handleEmailChange}/>
<input className={style.Email} type="Number" placeholder="Mobile Number" onClick={handleMobileChange}/>
<input className={style.Email} type="password" placeholder="Password" onClick={handlePasswordChange}/>
<button className={style.Button} onClick={handleSignup} >Sign Up</button>
</div>
</div>
);
};