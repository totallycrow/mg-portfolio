import React from "react"
import "../../styles/global.css"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <div className="main-header-container">
        <div className="h-40">
          {" "}
          <StaticImage
            src="../../images/lasgo-showroom.webp"
            className="h-full"
            objectPosition={""}
            objectFit={"cover"}
          ></StaticImage>
        </div>

        <div className="p-8">
          {" "}
          <StaticImage
            src="../../images/lasgo-logo-main.webp"
            className="h-full"
            objectPosition={""}
            objectFit={"fit"}
          ></StaticImage>
        </div>
      </div>
      <div className="p-2">
        <h1>LASGO WORLDWIDE MEDIA</h1>
        <ul className="list-disc list-inside">
          <li className="">BRANDING / VISUAL IDENTITY</li>
          <li>WEB DEVELOPMENT</li>
          <li>WEB DESIGN</li>
          <li>UX/UI</li>
        </ul>
        <a href="www.lasgo.com" className="block my-1 underline">
          www.lasgo.com
        </a>
      </div>
    </Layout>
  )
}
