import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
      <div className="">
        <StaticImage src="../images/logo.webp"></StaticImage>
        <div className="px-4 flex justify-between items-center">
          <Link to="/about-me">About</Link>
          <Link to="/portfolio">Portoflio</Link>
          <Link to="/about-me">Contact Me</Link>
        </div>
      </div>
    </div>
  )
}
