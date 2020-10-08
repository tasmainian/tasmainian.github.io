import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import Timeline from "../components/Timeline.js";
import AOS from 'aos';
import 'aos/dist/aos.css'
import "../styles/global.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  AOS.init({
    delay: 200,
    duration: 1200,
    once: false
  })    
  
  return (
    <>
      <Navbar transparent />
      <main>
      
        <Header />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
