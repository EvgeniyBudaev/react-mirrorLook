import React from 'react'
import styles from '@/frontend/components/product/productCard/cardSlider/cardSlider.module.scss'
import SliderAsNavFor from '@/frontend/components/sliderAsNavFor'

const CardSlider = () => {
  return (
    <div className={styles.cardSlider}>
      <div className={styles.cardSliderProduct}>
        <SliderAsNavFor />
      </div>
    </div>
  )
}

export default CardSlider
