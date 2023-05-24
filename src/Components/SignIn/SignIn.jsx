import style from "./styles.module.scss";

export const SignIn = () => {
return(
<div className={style.SignIn_Wrapper}>
<input type="string" placeholder="UserName"/>
<input type="string" placeholder="Email"/>
<input type="Number" placeholder="Mobile Number"/>
<input type="password" placeholder="Password"/>
<button>Sign In</button>
</div>
);
};