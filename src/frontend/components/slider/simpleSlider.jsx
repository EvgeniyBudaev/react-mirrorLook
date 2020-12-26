import React, {Component} from 'react'
import Slider from "react-slick";
import styles from './simpleSlider.module.scss'
import './simpleSlider.scss'

class SimpleSlider extends Component{
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={styles.slider}>
        <div className={styles.container}>
          <h2 className={styles.title}></h2>

          <Slider {...settings}>
            <div className={styles.card}>
              <h3>1</h3>
            </div>
            <div className={styles.card}>
              <h3>2</h3>
            </div>
            <div className={styles.card}>
              <h3>3</h3>
            </div>
            <div className={styles.card}>
              <h3>4</h3>
            </div>
            <div className={styles.card}>
              <h3>5</h3>
            </div>
            <div className={styles.card}>
              <h3>6</h3>
            </div>
          </Slider>

        </div>
      </div>
    )
  }
}

export default SimpleSlider
