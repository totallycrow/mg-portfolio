import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"
import { useScrollRestoration } from "gatsby"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible")
  }, [open])

  const hidden = " hidden"
  const visible = " visible"

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

        <div>
          <div
            class="space-y-2"
            onClick={() => {
              console.log("state before click:", open)
              setOpen(!open)
              console.log("state:", open)
            }}
          >
            <span class="block w-8 h-0.5 bg-gray-600"></span>
            <span class="block w-8 h-0.5 bg-gray-600"></span>
            <span class="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </div>

        {/* <div className="px-10">
          <Link to="/about-me" className="px-4">
            About
          </Link>
          <Link to="/portfolio" className="px-4">
            Portoflio
          </Link>
          <Link to="/contact" className="px-4">
            Contact Me
          </Link>
        </div> */}
      </div>
      {/* "w-60 h-full shadow-md bg-white px-1 absolute top-0 left-0 z-50" */}
      <div
        class={
          open === false
            ? "hidden"
            : "visible w-48 h-full shadow-md bg-white px-1 absolute top-0 left-0 z-50"
        }
      >
        {/* <ul class="relative">
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 1
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Sidenav link 2
            </a>
          </li>
        </ul> */}

        <div className="w-full h-full flex items-start justify-start max-auto">
          <div className="pl-10 pt-40">
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
