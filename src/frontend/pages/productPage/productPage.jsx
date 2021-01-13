import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import Product from '../../components/product'
import SliderSimilarProducts from '../../components/sliderSimilarProducts'

const ProductPage = (props) => {
  //console.log('[ProductPage][props]', props)
  const {match} = props
  const productId = match.params.id

  return (
    <>
      <Breadcrumbs />
      <Product productId={productId} match={match} />
      <SliderSimilarProducts />
    </>
  )
}

export default ProductPage
