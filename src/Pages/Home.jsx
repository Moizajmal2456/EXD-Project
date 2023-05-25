import { Bags } from "../Components/BagsProduct/Bags";
import { Footer } from "../Components/Footer/Footer";
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { Navbar } from "../Components/Navbar/Navbar";
import { Partners } from "../Components/Partners/Partners";
import { Pents } from "../Components/Pents/Pents";
import { ServiceList } from "../Components/Services/ServiceList";
import { Shirts } from "../Components/ShirtProduct/Shirts";
import { Shoes } from "../Components/ShoesProduct/Shoes";

export const HomePage = () => {
return(
    <>
    <Navbar/>
    <HeroSection/>
    <Shirts/>
    <Pents/>
    <Bags/>
    <Shoes/>
    <ServiceList/>
    <Partners/>
    <Footer/>
    </>
);
};