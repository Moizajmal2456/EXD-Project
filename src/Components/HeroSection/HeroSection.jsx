import style from "./styles.module.scss";
import HeroImage from "../../../public/Images/herosection.jpg";

export const Hero = () => {
return(
    <div className={style.HeroSection_Erapper}> 
     <div className={style.Left_Section}>
      <h2>Catch your own style and look</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolor ibusperferendis suscipit
         fugit voluptatum sequi et ratione provident inventore fugiat. Impedit, adipisci mollitia harum fuga voluptates aliquid eaque consectetur repudiandae?</p>
         <button className={style.Button}>Checkout</button>
     </div>
     <div className={style.Right_Section}>
        <img  src={HeroImage} alt="Hero section image" />
     </div>
    </div>
);
};