import React, {Component} from 'react'
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


class SliderAsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settingsFor = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
    };

    const settingsNav = {
      slidesToShow: 3,
      arrows: false,
      dots: true,
      centerMode: true,
      variableWidth: false,
      swipeToSlide: true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          }
        },]
    };

    return (
      <section className={styles.slider} data-slider="" id="slider">
        <div className={styles.container}>

          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            className="for"
            {...settingsFor}
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
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            className="nav"
            {...settingsNav}
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


}

export default SliderAsNavFor
