import { useState } from "react";
import style from "./styles.module.scss";

export const SignIn = () => {
    const [userName , setUserName] = useState();
    const [email , setEmail] = useState();
    const [mobile , setMobile] = useState();
    const [password , setPassword] = useState();

return(
<div className={style.SignIn_Wrapper}>
<div className={style.Input_Fields}>
<h2>Signin to your account</h2>
<input className={style.Email} type="string" placeholder="UserName"/>
<input className={style.Email} type="string" placeholder="Email"/>
<input className={style.Email} type="Number" placeholder="Mobile Number"/>
<input className={style.Email} type="password" placeholder="Password"/>
<button className={style.Button}>Sign In</button>
</div>
</div>
);
};