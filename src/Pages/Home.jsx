import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Alumni_Idea from "../components/Alumni_Idea";
import Alumni_community from "../components/Alumni_community";
import Recant_Event from "../components/Recant_Event";
import Event_headline from "../components/Event_headline";
import Inovation_idea from "../components/Inovation_idea";
import Footer from "../components/Footer";
import ThreeColTestimonials from "../components/testimoanal";
import Gallery from "../components/Gallery";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Alumni_Idea />
      <Alumni_community />
      <Event_headline />
      <Recant_Event />
      <ThreeColTestimonials />
      <Inovation_idea />
      <Gallery />

      <Footer />
    </>
  );
}

export default Home;
