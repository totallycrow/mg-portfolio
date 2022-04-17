import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-teal-100 h-90vh flex justify-center items-center max-w-screen-2xl mx-auto py-8">
        <div className="bg-blue-100 grid grid-cols-3 gap-8">
          <Link to="/portfolio/crosley">
            {" "}
            <StaticImage
              src="../images/logo.webp"
              width={300}
              height={300}
            ></StaticImage>
          </Link>
          <Link to="/portfolio/lasgo">
            {" "}
            <StaticImage
              src="../images/logo.webp"
              width={300}
              height={300}
            ></StaticImage>
          </Link>
          <Link to="/portfolio/kathleen">
            {" "}
            <StaticImage
              src="../images/logo.webp"
              width={300}
              height={300}
            ></StaticImage>
          </Link>
          <Link to="/portfolio/banabay">
            {" "}
            <StaticImage
              src="../images/logo.webp"
              width={300}
              height={300}
            ></StaticImage>
          </Link>
          <Link to="/portfolio/adlink">
            {" "}
            <StaticImage
              src="../images/logo.webp"
              width={300}
              height={300}
            ></StaticImage>
          </Link>
          <Link to="/portfolio/bluesenses">
            {" "}
            <StaticImage
              src="../images/logo.webp"
              width={300}
              height={300}
            ></StaticImage>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
