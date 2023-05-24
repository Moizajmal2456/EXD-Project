import style from "./styles.module.scss";

export const ForgotPassword = () => {
return(
    <div className={style.Forgot_Wrapper}>
    <input type="string" placeholder="Enter Email" />
    <button>Submit</button>
    </div>
);
};