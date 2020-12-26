import React, {Component} from 'react'
import Slider from "react-slick";
import styles from './simpleSlider.module.scss'
import './simpleSlider.scss'
import Card from '@/frontend/components/card'

class SimpleSlider extends Component{
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <div className={styles.slider}>
        <div className={styles.container}>
          <h2 className={styles.title}></h2>

          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>

        </div>
      </div>
    )
  }
}

export default SimpleSlider
