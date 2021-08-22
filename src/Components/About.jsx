import React from "react"

const About = () => {
  return (
    <section id="about">
      <div class="container mt-16 lg:mt-28 flex flex-col font-Montserrat mb-20">
        {/* Content */}
        <div class="flex flex-col lg:flex-row items-start gap-8 leading-10  ">
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
        <div class="w-3/4 lg:w-full flex flex-col lg:flex-row items-center text-left justify-center bg-gold mt-12 lg:mt-28  divide-y-2 lg:divide-y-0 lg:divide-x-2 py-4 mx-auto rounded-xl">
          {/* Card #1 */}
          <div class="flex flex-col text-white lg:px-12 py-12 flex-1  w-1/2 ">
            <p class="font-extralight text-base ">01</p>
            <p class="text-xl mt-12">
              Website
              <br />
              Development
            </p>
          </div>

          {/* Card #2 */}
          <div class="flex flex-col text-white lg:px-12 py-12 flex-1 w-1/2 ">
            <p class="font-extralight text-base">02</p>
            <p class="text-xl mt-12">
              Mobile App <br />
              Development
            </p>
          </div>

          {/* Card #3 */}
          <div class="flex flex-col text-white lg:px-12 py-12 flex-1 w-1/2 ">
            <p class="font-extralight text-base ">03</p>
            <p class="text-xl mt-12">
              Branding <br />& Design
            </p>
          </div>

          {/* Card #4 */}
          <div class="flex flex-col text-white lg:px-12 py-12  flex-1 w-1/2 ">
            <p class="font-extralight text-base ">04</p>
            <p class="text-xl mt-12">
              IoT Solution <br />
              Development
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
