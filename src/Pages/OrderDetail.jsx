import { useLocation } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { Orderdetail } from "../OrderDetail/orderDetail";


export const OrderDetailPage = () => {
  const location = useLocation();
  const receivedProps = location.state;
return(
    <>
    <Navbar/>
    <Orderdetail Data={receivedProps}/>
    <Footer/>
    </>
);
};