import React from "react"

const About = () => {
  return (
    <section>
      <div class="container mt-16 lg:mt-28 flex flex-col font-Montserrat">
        {/* Content */}
        <div class="flex flex-col lg:flex-row items-start gap-8 leading-10  ">
          {/* <div class="w-2/3 h-1 bg-lightGray mt-8 md:mt-10"></div> */}
          <h1 class="text-darkGray text-left text-3xl font-semibold flex-1">
            about
            <br />
            <span class="text-6xl">
              <span class="text-red">digi</span>diga
            </span>
          </h1>
          <div class="flex flex-col flex-1 text-center lg:text-left ">
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
        <div class="w-full flex flex-col flex-1 lg:flex-row items-center text-left justify-center bg-gold mt-12 lg:mt-28">
          {/* Card #1 */}
          <div class="flex flex-col text-white px-12">
            <p class="text-light text-base pt-12">01</p>
            <p class="text-xl py-12">Website Development</p>
          </div>

          {/* Card #2 */}
          <div class="flex flex-col text-white px-12">
            <p class="text-light text-base pt-12">02</p>
            <p class="text-xl py-12">Mobile App Development</p>
          </div>

          {/* Card #2 */}
          <div class="flex flex-col text-white px-12">
            <p class="text-light text-base pt-12">03</p>
            <p class="text-xl py-12">Branding & Design</p>
          </div>

          {/* Card #2 */}
          <div class="flex flex-col text-white px-12">
            <p class="text-light text-base pt-12">04</p>
            <p class="text-xl py-12">IoT Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
