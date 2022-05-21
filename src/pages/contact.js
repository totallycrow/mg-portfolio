import React from "react"
import "../styles/global.css"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl pl-2 mt-4">CONTACT</h1>
      <div className="p-2 my-4">
        <ContactForm />
      </div>
    </Layout>
  )
}
