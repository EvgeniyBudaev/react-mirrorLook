import React from 'react'
import './sliderNewProducts.scss'
import SimpleSlider from '../simpleSlider'

const SliderNewProducts = () => {
  return (
    <section className="slider">
      <div className="sliderContainer">
        <h2 className="sliderTitle">Новые поступления</h2>
        <div className="sliderInner">
            <SimpleSlider />
        </div>
      </div>
    </section>
  )
}

export default SliderNewProducts
