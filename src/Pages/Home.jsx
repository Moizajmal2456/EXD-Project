import { Products } from "../Components/AllProducts/AllProducts";
import { Footer } from "../Components/Footer/Footer";
import { Hero } from "../Components/HeroSection/HeroSection";
import { Navbar } from "../Components/Navbar/Navbar";
import { Partners } from "../Components/Partners/Partners";
import { ServiceList } from "../Components/Services/ServiceList";

export const HomePage = () => {
return(
    <>
    <Navbar/>
    <Hero/>
    <Products/>
    <ServiceList/>
    <Partners/>
    <Footer/>
    </>
);
};