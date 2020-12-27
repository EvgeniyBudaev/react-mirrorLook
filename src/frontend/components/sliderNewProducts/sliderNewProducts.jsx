import React from 'react'
import SimpleSlider from '@/frontend/components/simpleSlider'
import './sliderNewProducts.scss'

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