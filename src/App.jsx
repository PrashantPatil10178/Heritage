// App.js or index.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import CustomNavbar from "./Components/Navbar";
import SliderComponent from "./Components/SliderComponent";
import TimelineComponent from "./Components/Timeline";
import IndianArtGalleryComponent from "./Components/ArtGalary";
import IndiaMap from "./Components/IndianMap";
import CulturalInterviewsAndTestimonials from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Chatbot from "./Components/Chatbot";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <CustomNavbar />
      <SliderComponent />
      <TimelineComponent />
      <IndianArtGalleryComponent />
      <IndiaMap />
      <CulturalInterviewsAndTestimonials />
      <Footer />
      <Chatbot />
    </>
  );
};

export default App;
