import style from "./styles.module.scss";

export const Footer = () => {
return(
<div className={style.Footer_Wrapper} >
 <div className={style.Links}>
  <div className={style.About}>
    <ul>
        <ol><b>About</b></ol>
        <ol>Our Story</ol>
        <ol>Our Blog</ol>
        <ol>Career</ol>
        <ol>Gurus</ol>
    </ul>
  </div>
<div className={style.Contact_Us}>
    <ul>
        <ol><b>Contact Us</b></ol>
        <ol>info@graana.com</ol>
        <ol>111-555-555</ol>
    </ul>
</div>
<div className={style.Follow}>
    <h3>Follow Us</h3> 
        <div className={style.Images}>
            <img src="/Images/instagram.webp" alt="instgram" /> 
            <img src="/Images/linkedin.webp" alt="linkedin" />
            <img src="/Images/twitter.webp" alt="twitter" />
            <img src="/Images/twitter.webp" alt="youtube" />
            <img src="/Images/facebook.webp" alt="facebook" />         
        </div>
</div>
</div>
<div className={style.Terms}> 
        <p>Copyright 2023 Graana. All rights reserved</p>
        <p>Terms & Conditions | Privacy Policy | Desclaimer</p>
     </div>
</div>
);
};