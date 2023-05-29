import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Bags } from "../Components/BagsProduct/Bags";
import { BagsFilter } from "../Components/BagsFilters/BagsFilter";

export const BagsPage = () => {
return(<>
    <Navbar/>
    <BagsFilter/>
    <Bags/>
    <Footer/>
</>
);
};