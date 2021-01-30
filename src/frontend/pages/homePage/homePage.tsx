import React from 'react'
import SliderAsNavFor from '../../components/sliderAsNavFor'
import SliderNewProducts from '../../components/sliderNewProducts'
import Banner from '../../components/banner'
import SliderPopularProducts from '../../components/sliderPopularProducts'

const HomePage: React.FC = () => {
  return (
    <>
      <SliderAsNavFor />
      <SliderNewProducts />
      <Banner />
      <SliderPopularProducts />
    </>
  )
}

export default HomePage
