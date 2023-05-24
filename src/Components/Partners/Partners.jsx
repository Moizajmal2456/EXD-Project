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
        <li>Addidas</li>
        <li>Nike</li>
        <li>Tommy Hilfiger</li>
        <li>Levis</li>
        <li>Allen Solly</li>
    </div>
<div className={style.Pents}>
    <h2>Pents</h2>
        <li>Levis</li>
        <li>Calvin Klein</li>
        <li>Pep Jeans</li>
        <li>Madewell</li>
        <li>Bonobose</li>
    </div>
<div className={style.Bags}>
    <h2>Bags</h2>
        <li>Gucci</li>
        <li>Coach</li>
        <li>Prada</li>
        <li>Fendi</li>
        <li>Hermes</li>
    </div>
<div className={style.Shoes}>
    <h2>Shoes</h2>
        <li>Puma</li>
        <li>Addidas</li>
        <li>Reebok</li>
        <li>Sketchers</li>
        <li>Hush Puppies</li>
    </div> 
</div>
</div>
);
};