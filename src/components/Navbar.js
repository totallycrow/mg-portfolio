import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"
import { useScrollRestoration } from "gatsby"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("")

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible")
  }, [open])

  const hidden = " hidden"
  const visible = " visible"

  const handleClick = () => {
    console.log("state before click:", open)
    setOpen(!open)
    console.log("state:", open)
  }

  const closeButton = () => (
    <button
      type="button"
      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      onClick={handleClick}
    >
      <span class="sr-only">Close menu</span>
      {/* <!-- Heroicon name: outline/x --> */}
      <svg
        class="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )

  const openButton = () => (
    <div class="space-y-2" onClick={handleClick}>
      <span class="block w-8 h-0.5 bg-gray-600"></span>
      <span class="block w-8 h-0.5 bg-gray-600"></span>
      <span class="block w-5 h-0.5 bg-gray-600"></span>
    </div>
  )

  const activeStyles = {
    color: "#f5f5f5",
    borderBottomWidth: 2,
    borderBottomColor: "#f5f5f5",
  }

  return (
    <nav className="border-b-2">
      <div className="mx-auto pl-2 pr-4 h-16 flex justify-between items-center  max-w-screen-2xl">
        <div className="flex justify-center items-center">
          <Link to="/">
            <StaticImage
              src="../images/logo.webp"
              width={50}
              height={65}
              className="mb-1"
            ></StaticImage>
          </Link>
        </div>
        {/* {closeButton()} */}

        <div>
          {open === true ? closeButton() : openButton()}
          {/* <div
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
          </div> */}
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
            : "visible w-52 h-full shadow-md bg-neutral-800 px-1 absolute top-0 left-0 z-50"
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

        <div className="w-full h-full flex items-start justify-start max-auto text-neutral-400">
          <div className="pl-6 pt-40 text-lg">
            <Link
              to="/about-me"
              className="py-2 mb-3 block border-b-2 border-neutral-400"
              activeStyle={activeStyles}
            >
              ABOUT ME
            </Link>
            <Link
              to="/portfolio"
              className="py-2 mb-3 block border-b-2 border-neutral-400"
              activeStyle={activeStyles}
            >
              PORTFOLIO
            </Link>
            <Link
              to="/contact"
              className="py-2 mb-3 block border-b-2 border-neutral-400"
              activeStyle={activeStyles}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
