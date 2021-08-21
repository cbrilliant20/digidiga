import React from "react"
import hero from "../Assets/hero.png"

const Hero = () => {
  return (
    <section>
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* Content */}
        <div class="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left font-Montserrat">
          <h1 class="text-3xl md:text-4xl lg:text-5xl mb-6 text-darkGray">
            We create digital products as your solution
          </h1>
          <p class="text-lightGray mb-4">
            Web Design, Mobile Apps, IoT Solutions
          </p>
          <button
            type="button"
            class="shadow-md py-3 px-12 rounded-md transition duration-500 text-white bg-red hover:bg-white hover:text-darkGray  mt-10 mb-6"
          >
            Contact Us
          </button>
          <div class="w-2/3 h-1 bg-red mt-8 md:mt-10"></div>
        </div>
        {/* Image */}
        <div class="flex flex-1  mb-6 justify-center w-2/3 h-2/3 md:w-full md:h-full">
          <img src={hero} alt="" class="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
