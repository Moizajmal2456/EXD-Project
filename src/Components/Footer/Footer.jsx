import style from "./styles.module.scss";
import Instagram from "../../Images/instagram.webp";
import Linkedin from "../../Images/linkedin.webp";
import Twitter from "../../Images/twitter.webp";
import Youtube from "../../Images/twitter.webp";
import Facebook from "../../Images/facebook.webp";

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
            <img src={Instagram} alt="instgram" /> 
            <img src={Linkedin} alt="linkedin" />
            <img src={Twitter} alt="twitter" />
            <img src={Youtube} alt="youtube" />
            <img src={Facebook} alt="facebook" />         
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