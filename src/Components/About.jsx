import React from "react"

const About = () => {
  return (
    <section id="about">
      <div class="container mt-16 lg:mt-28 flex flex-col font-Montserrat mb-20">
        {/* Content */}
        <div class="flex flex-col lg:flex-row items-start gap-8 leading-10  ">
          {/* <div class="w-2/3 h-1 bg-lightGray mt-8 md:mt-10"></div> */}
          <h1 class="text-darkGray text-left text-3xl font-semibold flex-1 mx-auto">
            about
            <br />
            <span class="text-6xl">
              <span class="text-red">digi</span>diga
            </span>
          </h1>
          <div class="flex flex-col flex-1 text-left ">
            <p class="text-lightGray">
              <span class="text-xl text-darkGray">Lorem</span> ipsum dolor sit
              amet consectetur adipisicing elit. Beatae, earum, nisi fugit sunt
              voluptatum magni dignissimos molestiae facilis eum possimus
              adipisci distinctio, repudiandae eligendi!
            </p>
            <p class="text-lightGray">
              <span class="text-xl text-darkGray">Lorem</span> ipsum dolor sit
              amet consectetur adipisicing elit. Beatae, earum, nisi fugit sunt
              voluptatum magni dignissimos molestiae facilis eum possimus
              adipisci distinctio, repudiandae eligendi!
            </p>
          </div>
        </div>

        {/* Card Container */}
        <div class="w-2/3 lg:w-full flex flex-col lg:flex-row items-center text-center lg:text-left justify-center bg-gold mt-12 lg:mt-28  divide-y-2 lg:divide-y-0 lg:divide-x-2 py-4 mx-auto">
          {/* Card #1 */}
          <div class="flex flex-col text-white lg:px-12 py-12 flex-1  ">
            <p class="text-light text-base ">01</p>
            <p class="text-xl mt-12">Website Development</p>
          </div>

          {/* Card #2 */}
          <div class="flex flex-col text-white lg:px-12 py-12 flex-1 ">
            <p class="text-light text-base">02</p>
            <p class="text-xl mt-12">Mobile App Development</p>
          </div>

          {/* Card #3 */}
          <div class="flex flex-col text-white lg:px-12 py-12 flex-1 ">
            <p class="text-light text-base ">03</p>
            <p class="text-xl mt-12">Branding & Design</p>
          </div>

          {/* Card #4 */}
          <div class="flex flex-col text-white lg:px-12 py-12  flex-1 h-full">
            <p class="text-light text-base ">04</p>
            <p class="text-xl mt-12">IoT Solution Development</p>
          </div>

          {/* Bars` */}
          {/* <div class="h-3/4 w- bg-white left-50 absolute"></div> */}
        </div>
      </div>
    </section>
  )
}

export default About
