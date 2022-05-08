import React from "react"
import "../styles/global.css"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <StaticImage
          src="../images/about-background.webp"
          className="z-0 h-96"
        ></StaticImage>
        <div className="absolute inset-0 z-10 flex justify-center items-center text-5xl text-stone-700">
          <h3 className="border-2 p-4 border-stone-400">ABOUT ME</h3>
        </div>
      </div>
      <div className="-mt-20 grid grid-cols-2 gap-8 items-center container mx-auto">
        {" "}
        <div className="flex items-center">
          {" "}
          <StaticImage
            src="../images/about.webp"
            className="z-0 rounded-full"
            width={300}
            height={300}
          ></StaticImage>
        </div>
        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          numquam?
        </div>
      </div>
    </Layout>
  )
}
