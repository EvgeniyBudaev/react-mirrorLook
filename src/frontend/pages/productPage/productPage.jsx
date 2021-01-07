import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import Product from '../../components/product'
import SliderSimilarProducts from '../../components/sliderSimilarProducts'

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

