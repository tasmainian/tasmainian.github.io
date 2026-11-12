import React, { useEffect } from "react"

import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import About from "../components/About.js"
import Projects from "../components/Projects.jsx"
import Experience from "../components/Experience.jsx"
import "aos/dist/aos.css"
import "../styles/global.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

// The original multi-section site, kept reachable from the Night Wall's
// "old route (v1)" link.
export default function V1() {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  useEffect(() => {
    const isBrowser = typeof window !== "undefined"
    const AOS = isBrowser ? require("aos") : undefined
    AOS.init({
      delay: 200,
      duration: 1200,
      once: true,
    })
    AOS.refresh()
  })

  return (
    <>
      <Navbar transparent />
      <main>
        <Header />
        <div id="about">
          <About />
        </div>
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
