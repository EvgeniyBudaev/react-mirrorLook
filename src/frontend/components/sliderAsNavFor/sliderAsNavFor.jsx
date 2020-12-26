import React, { Component } from "react"
import Slider from "react-slick"
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import styles from './sliderAsNavFor.module.scss'
import './sliderAsNavFor.scss'
import {ROUTES} from '@/frontend/routes'

import slider1 from '@/assets/images/content/slider-1.jpg'
import slider2 from '@/assets/images/content/slider-2.jpg'
import slider3 from '@/assets/images/content/slider-3.jpg'

import slide1 from '@/assets/images/content/slide-1.png'
import slide2 from '@/assets/images/content/slide-2.png'
import slide3 from '@/assets/images/content/slide-3.png'


class SliderAsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  // const hamburger = classNames(styles.item, styles.menuBtn)

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      // dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      //centerMode: true,
      //variableWidth: false,
    };
    return (
      <section className={styles.slider} data-slider="" id="slider">
        <div className={styles.container}>
          <div>

            <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              className="for"
              {...settings}
            >
                <div className={styles.item}>
                  <img src={slider1} alt="images" />
                </div>
                <div className={styles.item}>
                  <img src={slider2} alt="images" />
                </div>
                <div className={styles.item}>
                  <img src={slider3} alt="images" />
                </div>
            </Slider>

            <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              className="nav"
              arrows={false}
              dots={true}
            >
              <div className={styles.navItem}>
                <img src={slide1} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide2} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide3} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide1} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide2} alt="images" className={styles.navItemImg} />
              </div>
              <div className={styles.navItem}>
                <img src={slide3} alt="images" className={styles.navItemImg} />
              </div>
            </Slider>

            <div className={styles.btn}>
              <div className={styles.btnLink}>
                <Link to={ROUTES.CATEGORIES} >Смотреть весь каталог</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default SliderAsNavFor
