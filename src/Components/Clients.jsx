import React from "react"
import brand1 from "../Assets/brand1.png"
import brand2 from "../Assets/brand2.png"
import brand3 from "../Assets/brand3.png"
import brand4 from "../Assets/brand4.png"
import brand5 from "../Assets/brand5.png"
import brand6 from "../Assets/brand6.png"
import brand7 from "../Assets/brand7.png"
import brand8 from "../Assets/brand8.png"
import img1 from "../Assets/img1.png"
const Clients = () => {
  const brands = [
    {
      img: brand5,
    },
    {
      img: brand2,
    },
    {
      img: brand3,
    },
    {
      img: brand4,
    },
    {
      img: brand1,
    },
    {
      img: brand6,
    },
    {
      img: brand7,
    },
    {
      img: brand8,
    },
  ]

  return (
    <section id="client">
      <div class="container pt-16 pt-24">
        <div class="w-1/3 h-1 bg-red mt-8 md:mt-10 bg-darkGray"></div>
        <h2 class="text-left mt-10 text-darkGray text-4xl">
          our <br />
          <span class="text-6xl font-bold text-gold">clients</span>
        </h2>
        {/* Brands */}
        <div class="grid md:grid-cols-4 gap-12 pt-12 ">
          {brands.map((item, index) => {
            return (
              <div class="flex items-center justify-center " key={index}>
                <img src={item.img} alt="" class="" />
              </div>
            )
          })}
        </div>
      </div>
      <div className="client-bg ">
        <div class=" container  flex flex-col justify-between items-center lg:flex-row relative gap-6">
          <img src={img1} alt="" class="w" />
          <div class="text-left text-white bg-red p-4 leading-10  w-full md:w-1/3 sm:mt-7 lg:mt-0">
            <p class="text-3xl font-bold mb-6">Why choose us?</p>
            <p class="font-thin">
              <span class="font-semibold text-xl">Lorem</span> ipsum, dolor sit
              amet consectetur adipisicing elit. Quasi accusamus neque
              voluptatem. Exercitationem pariatur praesentium unde excepturi
              laboriosam sunt maiores reiciendis autem saepe iste, velit
              quisquam omnis amet fuga rem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
