import style from "./styles.module.scss";
export const OrderCard = ({id, image, price, quantity}) => {
    return(
        <div className={style.order}>
            <p>{id}</p>
            <img src={image} alt="product"/>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
        </div>
    );
};