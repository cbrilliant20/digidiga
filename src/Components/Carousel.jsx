import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import asset1 from "../Assets/asset1.png"
import asset2 from "../Assets/asset2.png"

const Carousel = () => {
  const handleDragStart = (e) => e.preventDefault()

  const items = [
    <img src={asset1} onDragStart={handleDragStart} role="presentation" />,
    <img src={asset2} onDragStart={handleDragStart} role="presentation" />,
    <img src={asset1} onDragStart={handleDragStart} role="presentation" />,
    <img src={asset2} onDragStart={handleDragStart} role="presentation" />,
    <img src={asset1} onDragStart={handleDragStart} role="presentation" />,
    <img src={asset2} onDragStart={handleDragStart} role="presentation" />,
    <img src={asset1} onDragStart={handleDragStart} role="presentation" />,
  ]
  const responsive = {
    1: { items: 1 },
    640: { items: 2 },
    1024: { items: 3 },
  }
  return (
    <div class="container mt-12 lg:mt-24  ">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        items={items}
      />
    </div>
  )
}

export default Carousel
