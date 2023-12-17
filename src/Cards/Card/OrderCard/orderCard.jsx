import style from "./styles.module.scss";
export const OrderCard = ({image, price, quantity}) => {
    return(
        <div className={style.order}>
            <img src={image} alt="product"/>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
        </div>
    );
};