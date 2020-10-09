import React, { useEffect } from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import Timeline from "../components/Timeline.js";
// import AOS fronm 'aos';
import 'aos/dist/aos.css'
import "../styles/global.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const AOS = isBrowser ? require("aos") : undefined;
    AOS.init({
      delay: 200,
      duration: 1200,
      once: true
    })   
    AOS.refresh()
  });  
  
  return (
    <>
      <Navbar transparent />
      <main>
      
        <Header />
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Timeline />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
