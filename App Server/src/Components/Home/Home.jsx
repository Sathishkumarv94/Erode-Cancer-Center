import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";
import '../Home/Home.css'

import CustomSlider from "../Slider/Slider";
import ServiceCards from "../Servicecard/Servicecard";
import HealthArticle from '../HealthArticle/HealthTipArticle'
import DoctorsSection from "../DoctorsSection/DoctorsSection";
import VirtualTour from "../VirtualTour/VirtualTour";
import DoctorQuoteSection from "../DoctorQuoteSection/DoctorQuoteSection";
import PatientStats from "../PatientStats/PatientStats";
import OurTeam from "../OurTeam/OurTeam";
import LocationMap from "../Map/Map";
import AnimatedAccordion from "../Accordion/Accordion";
import Blogs from "../Blogs/Blogs";
import InsuranceSlider from "../InsuranceSlider/InsuranceSlider";

function Home(){
    const navigate=useNavigate()
    useEffect(() => {
        document.title = "Home | Erode Cancer Centre Salem Unit";
      }, []);
   
    
return (
    <div>
        
        <CustomSlider></CustomSlider>
        <ServiceCards></ServiceCards>
        <HealthArticle></HealthArticle>
        <OurTeam></OurTeam>
        <VirtualTour></VirtualTour>
        <DoctorQuoteSection></DoctorQuoteSection>
        <AnimatedAccordion></AnimatedAccordion>
        <Blogs></Blogs>
        <InsuranceSlider></InsuranceSlider>
        <LocationMap></LocationMap>
    </div>
)
}
export default Home