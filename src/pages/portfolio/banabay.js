import React from "react"
import "../../styles/global.css"

import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div className="bg-gray-500 w-screen h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold underline text-blue-600 pt-60">
        Hello world!
      </h1>
      
    </div>
  )
}
