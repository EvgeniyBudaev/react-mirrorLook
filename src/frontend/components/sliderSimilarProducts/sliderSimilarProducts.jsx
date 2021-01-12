import React from 'react'
import SimpleSlider from '../simpleSlider'

const SliderSimilarProducts = () => {
  return (
    <section className="slider">
      <div className="sliderContainer">
        <h2 className="sliderTitle">Похожие товары</h2>
        <div className="sliderInner">
          <SimpleSlider />
        </div>
      </div>
    </section>
  )
}

export default SliderSimilarProducts
