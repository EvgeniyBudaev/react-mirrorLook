import React from 'react'
import SliderAsNavFor from '@/frontend/components/sliderAsNavFor'
import SliderNewProducts from '@/frontend/components/sliderNewProducts'
import Banner from '@/frontend/components/banner'
import SliderPopularProducts from '@/frontend/components/sliderPopularProducts'

const HomePage = () => {
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

