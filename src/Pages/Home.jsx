import { Bags } from "../Components/BagsProduct/Bags";
import { Footer } from "../Components/Footer/Footer";
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { Navbar } from "../Components/Navbar/Navbar";
import { Shoes } from "../Components/ShoesProduct/Shoes";

export const HomePage = () => {
return(
    <>
    <Navbar/>
    <HeroSection/>
    <Bags/>
    <Shoes/>
    <Footer/>
    </>
);
};