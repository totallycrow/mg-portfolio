import React from "react"
import "../styles/global.css"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="main-header-container">
        <div className="h-40">
          {" "}
          <StaticImage
            src="../images/about-background.webp"
            className="h-full"
            objectPosition={""}
            objectFit={"cover"}
          ></StaticImage>
        </div>
      </div>

      <div className="content-container  px-6">
        <div className="flex items-center justify-center -mt-20 h-60 w-60 mx-auto mb-6">
          <StaticImage
            src="../images/about.webp"
            className="h-full"
            objectFit={"cover"}
            imgStyle={{ borderRadius: "100%" }}

            // width={200}
            // height={200}
            // aspectRatio={3 / 1}
          ></StaticImage>
        </div>
        <div className="border-2 p-4 border-stone-400 mx-auto flex items-center justify-center text-lg">
          <h2>ABOUT ME</h2>
        </div>
        <div>
          <p className="py-6">
            I'm a highly trained and experienced Graphic Designer based in
            London, UK.
          </p>
          <p>
            A professional, innovative, highly creative individual with the
            ability to adapt to all kinds of environments, good at thinking 'out
            of the box' and keeping abreast of relevant new techniques in Design
            Software, Branding, Visual Identity, Web, Digital & Photography.
          </p>
        </div>

        <div className="mt-4 mb-4">
          <div class="mb-1 text-base font-medium ">Illustrator</div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 ">
            <div class="bg-gray-600 h-2.5 rounded-full w-5/6"></div>
          </div>
        </div>

        <div className="mt-4 mb-4">
          <div class="mb-1 text-base font-medium ">Photoshop</div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 ">
            <div class="bg-gray-600 h-2.5 rounded-full w-11/12"></div>
          </div>
        </div>

        <div className="mt-4 mb-4">
          <div class="mb-1 text-base font-medium ">InDesign</div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 ">
            <div class="bg-gray-600 h-2.5 rounded-full w-11/12"></div>
          </div>
        </div>

        <div className="mt-4 mb-4">
          <div class="mb-1 text-base font-medium ">Premiere</div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 ">
            <div class="bg-gray-600 h-2.5 rounded-full w-1/2"></div>
          </div>
        </div>

        <div className="mt-8 mb-8">
          <ul>
            <li>
              - Extremely creative with an excellent attention to detail -
              Excellent advanced computer skills
            </li>
            <li>
              - fully conversant with Adobe Illustrator, Photoshop, InDesign,
              Premiere; with Microsoft Office using Word, Excel, PowerPoint,
              Publisher; with 3D programs such as SolidWorks and Cinema 4D; good
              with Windows or Mac OS - HTML and CSS knowledge.
            </li>
            <li>
              - Excellent organisational, time management and planning skills -
              Punctual and reliable
            </li>
          </ul>
        </div>
      </div>

      <div className="alternative-container bg-stone-900 text-slate-100 ">
        <div className="alternative-container px-6 ">
          <p className="text-center p-4">LATEST WORK | ACHIEVEMENTS</p>
          <ul classN>
            <li className="py-2">
              2017 - PRESENT | Graphic Designer for Lasgo Worlwide Media -
              London, UK
            </li>
            <li className="py-2">
              2016 – 2017 | Graphic Designer & Marketing Officer for KATHLEEN
              NATURAL LIMITED - Warwick, UK{" "}
            </li>
            <li className="py-2">
              2015 – 2016 | Graphic Designer for Adlink International (UK) LTD -
              London, UK
            </li>
            <li className="py-2">
              2013 – 2015 | Graphic Designer for KreativaOnline - Portimão,
              Portugal
            </li>
            <li className="py-2">
              2014 | Graphic Designer for the "Angola's Great Traveling Book"
              cover - Portugal
            </li>
            <li className="py-2">
              2013 | International Competition for SIGG bottle design - Third
              Place award
            </li>
            <li className="py-2">
              2009 - 2012 | Bachelor's Degree in Communication Design - Portugal
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
