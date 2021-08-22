import React from "react"
import Gallery from "./Carousel"

const Projects = () => {
  return (
    <section class="-mt-52 bg-offWhite">
      <div class="container pt-52">
        <div class="w-1/3 h-1 bg-red mt-8 md:mt-10"></div>
        <h2 class="text-left mt-10 text-red text-4xl">
          recent <br />
          <span class="text-6xl font-bold">projects</span>
        </h2>
      </div>
      <Gallery />
    </section>
  )
}

export default Projects
