import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-teal-100 w-screen h-screen flex justify-center items-center max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-3">
          <Link to="/portfolio/crosley">Crosley Radio</Link>
          <Link to="/portfolio/lasgo">LASGO</Link>
          <Link to="/portfolio/kathleen">Kathleen</Link>
          <Link to="/portfolio/banabay">Banabay</Link>
          <Link to="/portfolio/adlink">Adlink</Link>
          <Link to="/portfolio/bluesenses">BluesenseS</Link>
        </div>
      </div>
    </div>
  )
}
