import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Shirts } from "../Components/ShirtProduct/Shirts";
import { ShirtsFilter } from "../Components/ShirtsFilters/ShirtsFilter";

export const ShirtsPage = () => {
return(<>
    <Navbar/>
    <ShirtsFilter/>
    <Shirts/>
    <Footer/>
</>
);
};