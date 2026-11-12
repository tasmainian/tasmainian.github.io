import React from "react"

import NightWall from "../components/NightWall.jsx"
import "../styles/global.css"

// The previous multi-section layout (Navbar, Header, About, Experience,
// Projects, Footer) is kept in src/components and preserved in tasmainian-v1.
export default function App() {
  return (
    <main>
      <NightWall />
    </main>
  )
}
