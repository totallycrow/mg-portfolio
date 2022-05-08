import React from "react"
import "../styles/global.css"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Layout from "../components/layout"

import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <h2>404 Page Not Found</h2>
    </Layout>
  )
}
