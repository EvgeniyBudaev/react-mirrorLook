import React, {useEffect, useState} from 'react'
import Slider from "react-slick"
import {Link} from 'react-router-dom'
import styles from './sliderAsNavFor.module.scss'
import './sliderAsNavFor.scss'
import {ROUTES} from '@/frontend/routes'

import slider01 from '@/assets/images/content/slider-1.jpg'
import slider02 from '@/assets/images/content/slider-2.jpg'
import slider03 from '@/assets/images/content/slider-3.jpg'

import slide01 from '@/assets/images/content/slide-1.png'
import slide02 from '@/assets/images/content/slide-2.png'
import slide03 from '@/assets/images/content/slide-3.png'


const SliderAsNavFor = () => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1
  let slider2


  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  },[nav1, nav2])


  return (
      <section className={styles.slider} data-slider="" id="slider">
        <div className={styles.container}>


            <Slider
              asNavFor={nav2}
              ref={slider => (slider1 = slider)}
              className="for"
              arrows={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              swipeToSlide={true}
              focusOnSelect={true}
              swipe={true}
              touchMove={true}
            >
                <div className={styles.item}>
                  <img src={slider01} alt="images" />
                </div>
                <div className={styles.item}>
                  <img src={slider02} alt="images" />
                </div>
                <div className={styles.item}>
                  <img src={slider03} alt="images" />
                </div>
            </Slider>

            <Slider
              asNavFor={nav1}
              ref={slider => (slider2 = slider)}
              slidesToShow={3}
              className="nav"
              arrows={false}
              dots={true}
              centerMode={true}
              variableWidth={false}
              swipeToSlide={true}
              focusOnSelect={true}
              swipe={true}
              touchMove={true}
            >
              <div className={styles.navItem}>
                <img src={slide01} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide02} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide03} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide01} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide02} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide03} alt="images" className={styles.navItemImg} />
              </div>
            </Slider>

            <div className={styles.btn}>
              <div className={styles.btnLink}>
                <Link to={ROUTES.CATEGORIES} >Смотреть весь каталог</Link>
              </div>
            </div>

        </div>
      </section>
    );


}

export default SliderAsNavFor
