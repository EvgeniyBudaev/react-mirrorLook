import React from 'react'
import Breadcrumbs from '@/frontend/components/breadcrumbs'
import Product from '@/frontend/components/product'
import SliderSimilarProducts from '@/frontend/components/sliderSimilarProducts'

const ProductPage = () => {
  return (
    <>
      <Breadcrumbs />
      <Product />
      <SliderSimilarProducts />
    </>
  )
}

export default ProductPage

