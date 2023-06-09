import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { ShirtsFilter } from "../Components/ShirtsFilters/ShirtsFilter";
import { SelectedProduct } from "../Components/SelectedProduct/SelectedProduct";

export const SelectedProductPages = () => {
return(<>
    <Navbar/>
    <ShirtsFilter/>
    <SelectedProduct/>
    <Footer/>
</>
);
};