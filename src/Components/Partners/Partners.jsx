import style from "./styles.module.scss";

export const Partners = () => {
return(
<div className={style.Partners_Wrapper} >
   <div>
    <h1>Our Partners</h1>
    </div> 
    <div className={style.Intro}> 
<div className={style.Shirts}>
    <h2>Shirts</h2>
        <li>Khaadi</li>
        <li>Maria B</li>
        <li>Junaid Jamshed</li>
        <li>Gul Ahmed</li>
        <li>Limelight</li>
    </div>
<div className={style.Pents}>
    <h2>Pents</h2>
        <li>Zara</li>
        <li>Diesel</li>
        <li>Kayazar</li>
        <li>Outfitters</li>
        <li>Crossroads</li>
    </div>
<div className={style.Bags}>
    <h2>Bags</h2>
        <li>Borjan</li>
        <li>Stylo</li>
        <li>Totes PK</li>
        <li>Bagallery</li>
        <li>Astore</li>
    </div>
<div className={style.Shoes}>
    <h2>Shoes</h2>
        <li>Service</li>
        <li>Bata</li>
        <li>Ndure</li>
        <li>ECS</li>
        <li>Metro</li>
    </div> 
</div>
</div>
);
};