import React from "react"
import img2 from "../Assets/img2.png"
const Footer = () => {
  return (
    <section class="bg-red">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-4 text-left md:text-center ">
        <div class="flex flex-1 flex-col items-left lg:items-start  text-left md:text-center lg:text-left font-Montserrat text-white  ">
          <h1 class="text-2xl md:text-3xl lg:text-4xl mb-4 text-left ">
            Contact Us
          </h1>
          <p class=" mb-2 text-left ">
            Are you interested in working with us or <br />
            just want to ask questions?{" "}
          </p>
          <p class=" mb-2 text-left ">cbrilliant20@gmail.com </p>
          <p class=" mb-8 text-left ">cameron.brilliant.netlify.app </p>
        </div>
        {/* Image */}
        <div class="flex flex-1  justify-center  ">
          <img src={img2} alt="" class="transform -translate-y-1/3 scale-125" />
        </div>
      </div>
    </section>
  )
}
export default Footer
