import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ProductCard from './productCard'
import { loadProductById } from '../../redux/actions/actions'
import { createStructuredSelector } from 'reselect'
import {
  productByIdSelector,
  productLoadedSelector,
  productLoadingSelector
} from '../../redux/selectors'
import Loader from '../loader'

const Product = (props) => {
  console.log('[Product][props]', props)
  const {match, loadProductById, loading, loaded, product} = props
  const id = match.params.id

  useEffect(() => {
    if (!loading && !loaded) loadProductById(id)
  }, [loadProductById, loading, loaded, id])

  if (loading || !loaded) return <Loader />

  return (
    <>
      <ProductCard product={product} />
    </>
  )
}



export default connect(  createStructuredSelector({
  product: productByIdSelector,
  loading: productLoadingSelector,
  loaded: productLoadedSelector,
}), {loadProductById})(Product)
