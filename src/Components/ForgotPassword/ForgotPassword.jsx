import style from "./styles.module.scss";

export const ForgotPassword = () => {
return(
    <div className={style.Forgot_Wrapper}>
    <div className={style.Input_Fields}>
    <h2>Forgot Password? Enter email to get a link</h2>
    <input className={style.Email}  type="string" placeholder="Enter Email" />
    <button className={style.Button}>Submit</button>
    </div>
   </div> 
);
};