import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [menuOpen, setmMenuOpen] = useState(false)

  const handleClick = () => {
    setmMenuOpen(!menuOpen)
  }

  return (
    <header id="home">
      <nav class="container flex items-center py-4 mt-12 font-Montserrat">
        <h2 class="text-red text-2xl font-semibold">
          digi<span class="text-darkGray ">diga</span>
        </h2>
        <ul class="hidden md:flex flex-1 justify-end items-center gap-6">
          <li class="cursor-pointer text-red">
            <a href="#about">About Us</a>
          </li>
          <li class="cursor-pointer text-red">
            <a href="#">Our Projects</a>
          </li>
          <li class="cursor-pointer text-red">
            <a href="#">Clients</a>
          </li>
        </ul>

        {/* Mobile */}
        <div class="sm:hidden flex justify-end flex-1 items-center">
          <FontAwesomeIcon
            icon={faBars}
            class="w-6 fixed z-20 text-red"
            type="button"
            onClick={handleClick}
          />
        </div>
        {menuOpen && (
          <div class="flex flex-col items-center justify-center bg-darkGray bg-opacity-90 fixed top-0 right-0 h-full w-full z-30  ">
            <ul class="flex flex-col justify-center items-center sm:hidden gap-12 text-2xl text-white">
              <li class="cursor-pointer ">
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li class="cursor-pointer ">
                <a href="#about" onClick={handleClick}>
                  About Us
                </a>
              </li>
              <li class="cursor-pointer ">
                <a href="#" onClick={handleClick}>
                  Our Projects
                </a>
              </li>
              <li class="cursor-pointer ">
                <a href="#" onClick={handleClick}>
                  Clients
                </a>
              </li>
            </ul>
            <FontAwesomeIcon
              icon={faTimes}
              class="w-6 mt-12 text-white"
              onClick={handleClick}
            />
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
