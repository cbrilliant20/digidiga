import React from "react"
import brand1 from "../Assets/brand1.png"
import brand2 from "../Assets/brand2.png"
import brand3 from "../Assets/brand3.png"
import brand4 from "../Assets/brand4.png"
import brand5 from "../Assets/brand5.png"
import brand6 from "../Assets/brand6.png"
import brand7 from "../Assets/brand7.png"
import brand8 from "../Assets/brand8.png"

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
    </section>
  )
}

export default Clients
