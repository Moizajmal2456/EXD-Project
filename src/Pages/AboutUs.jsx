import AboutPage from "../Components/AboutHeroSection/Hero";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { ServiceList } from "../Components/Services/ServiceList";


export const AboutUsPage = () => {
return(<>
<Navbar/>
<AboutPage/>
<ServiceList/>
<Footer/>
</>
);
};