import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div className="bg-gray-500 w-screen h-screen flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-bold underline text-orange-600">
          Hello world!
        </h1>
        <Link to="/about-me">About</Link>
        <Link to="/portfolio">Portoflio</Link>
        <Link to="/about-me">Contact Me</Link>
      </div>
    </div>
  )
}
