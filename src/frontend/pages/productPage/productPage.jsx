import React from 'react'
import Product from '../../components/product'
import SliderSimilarProducts from '../../components/sliderSimilarProducts'

const ProductPage = (props) => {
  //console.log('[ProductPage][props]', props)
  const {match} = props
  const productId = match.params.id

  return (
    <>
      <Product productId={productId} match={match} />
      <SliderSimilarProducts />
    </>
  )
}

export default ProductPage
