import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Shoes } from "../Components/ShoesProduct/Shoes";
import { ShoesFilter } from "../Components/ShoesFilters/ShoesFilter";

export const ShoesPage = () => {
return(<>
    <Navbar/>
    <ShoesFilter/>
    <Shoes/>
    <Footer/>
</>
);
};