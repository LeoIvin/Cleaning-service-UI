import React from "react";
import './App.css'; 
import Nav from './Nav';
import Hero from "./Hero";
import Form from "./Form";
import Services from "./Services";
import Card from "./ServicesCards";
import Benefits from "./Benefits";
import Video from "./Video";
import Contact from "./Contact"; // Slightly responsive
import Newsletter from "./Newsletter"; // Slightly responsive
import Footer from "./Footer";

// Landing Page - Cleaning Services
function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-gus-clean bg-cover bg-center min-h-screen w-full p-14" id="home">
        <Nav />
        <Hero />
        <Form />
      </div>
      
      <div className="bg-default-black bg-cover bg-center w-full p-14">
        <Services />
      </div>
      
      <Benefits />
      
      <div>
        <Card />
      </div>
      
      <div>
        <Video />
      </div>
      
      <div>
        <Contact />
      </div>
      
      <div>
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default App;
