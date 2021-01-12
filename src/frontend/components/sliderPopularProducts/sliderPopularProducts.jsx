import React from 'react'
import SimpleSlider from '../simpleSlider'

const SliderPopularProducts = () => {
  return (
    <section className="slider">
      <div className="sliderContainer">
        <h2 className="sliderTitle">Популярные модели</h2>
        <div className="sliderInner">
          <SimpleSlider />
        </div>
      </div>
    </section>
  )
}

export default SliderPopularProducts
