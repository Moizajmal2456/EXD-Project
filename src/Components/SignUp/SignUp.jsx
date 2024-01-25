import {useState } from "react";
import style from "./styles.module.scss";
import axios from "axios";

export const SignUp = () => {
    const [userName , setUserName] = useState();
    const [email , setEmail] = useState();
    const [mobileNo , setMobile] = useState();
    const [password , setPassword] = useState();

  const handleNameChange = ( event ) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  const handleEmailChange = ( event ) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleMobileChange = ( event ) => {
    setMobile(event.target.value);
    console.log(mobileNo);
  };
 
  const handlePasswordChange = ( event ) => {
   setPassword(event.target.value)
   console.log(password);
  };

   const handleSubmit = async () => {
   try{
   const response = await axios.post(`http://localhost:4000/signup`, {
        userName,
        email,
        mobileNo,
        password,
      })
      console.log(response);
   }
   catch(error){
    console.log(error)
   }  
}

return(
<div className={style.SignIn_Wrapper}>
  <div className={style.Input_Fields}>
   <h2>Signup to your account</h2>
   <input className={style.Email} type="string" name="userName" placeholder="UserName" required onChange={handleNameChange}/>
   <input className={style.Email} type="string" name="email" placeholder="Email" required onChange={handleEmailChange}/>
   <input className={style.Email} type="Number" name="mobileNo" placeholder="Mobile Number" required onChange={handleMobileChange}/>
   <input className={style.Email} type="password" name="password" placeholder="Password" required onChange={handlePasswordChange}/>
   <button className={style.Button} type="submit" onClick={handleSubmit}>Sign Up</button>
  </div>
</div>
);
};