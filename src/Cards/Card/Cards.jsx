import { Link } from "react-router-dom";
import style from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export const Cards = ({image , heading , price , buttonText , productID, star}) => {
const stars = Array(star).fill(<FontAwesomeIcon icon={faStar} />);
return(
<div className={style.Cards}>
  <img src={image} alt="Bag pic"/>
  <h4>{heading}</h4>
  <p>{price}</p>
  <div className={style.star}>
      <p>{stars}</p>
    </div>
  <div className={style.Button_Wrap}>
     <Link to={`/detailpage/${productID}`}>
       <button className={style.Button}>{buttonText}</button>
     </Link> 
  </div>
</div>
);
};