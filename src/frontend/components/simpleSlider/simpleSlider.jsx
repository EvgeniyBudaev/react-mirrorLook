import React, {Component} from 'react'
import Slider from "react-slick";
import './simpleSlider.scss'
import CardSlider from '../cardSlider'


class SimpleSlider extends Component{
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };

    return (
      <>
          <Slider {...settings}>
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
          </Slider>
      </>
    )
  }
}

export default SimpleSlider

