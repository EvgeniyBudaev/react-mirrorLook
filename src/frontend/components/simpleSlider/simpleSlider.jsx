import React, {Component} from 'react'
import Slider from "react-slick";
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
      <>
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
      </>
    )
  }
}

export default SimpleSlider

