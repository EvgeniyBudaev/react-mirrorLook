import React from 'react'
import styles from './cardSlider.module.scss'
import SliderAsNavFor from '../../../sliderAsNavFor'

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
