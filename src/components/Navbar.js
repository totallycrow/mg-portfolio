import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  return (
    <nav className="border-b-2">
      <div className="mx-auto px-4 h-14 flex justify-between items-center  max-w-screen-2xl">
        <div className="flex justify-center items-center">
          <Link to="/">
            <StaticImage
              src="../images/logo.webp"
              width={50}
              height={50}
            ></StaticImage>
          </Link>
        </div>

        <div className="px-10">
          <Link to="/about-me" className="px-4">
            About
          </Link>
          <Link to="/portfolio" className="px-4">
            Portoflio
          </Link>
          <Link to="/about-me" className="px-4">
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  )
}
