import React from "react";
import { useEffect } from "react";
import HeroSection from "../HeroSection/HeroSection";
import AboutContent from "../AboutContent/AboutContent";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"
import Accordion from "../Accordion/Accordion";
import InsuranceSlider from "../InsuranceSlider/InsuranceSlider";

function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Erode Cancer Centre Salem Unit";
  }, []);
  return (
    <>
      <HeroSection />
      <AboutContent></AboutContent>
      <WhyChooseUs></WhyChooseUs>
      <Accordion></Accordion>
      <InsuranceSlider></InsuranceSlider>
    </>
  );
};
export default AboutPage