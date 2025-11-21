import AboutUs from "./components/AboutUs";
import Destination from "./components/Destination";
import EnquireForm from "../../components/EnquireForm";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import TestPreparation from "./components/TestPreparation";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Stats />
      <Services />
      <TestPreparation />
      <Destination />
      <Testimonials />
      <Partners />
      <EnquireForm imageSrc="/home/enquireform.jpg"/>
    </div>
  );
};

export default HomePage;
