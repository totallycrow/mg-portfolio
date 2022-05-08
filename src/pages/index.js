import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div className="bg-white px-14">
      <div className="text-center">
        <StaticImage
          src="../images/logo.webp"
          alt="Marisa Goncalves London Graphic Designer Logo"
        ></StaticImage>
        <div className="flex-col text-center text-white">
          <div className="bg-stone-900 p-2 mx-auto flex items-center justify-center my-3">
            <Link to="/about-me" className="w-full">
              About
            </Link>
          </div>
          <div className="bg-stone-900 p-2 mx-auto flex items-center justify-center my-3">
            <Link to="/portfolio" className="w-full">
              Portoflio
            </Link>
          </div>
          <div className="bg-stone-900 p-2 mx-auto flex items-center justify-center my-3">
            <Link to="/contact" className="w-full">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
