import React from 'react'
import {connect, useSelector} from 'react-redux'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {categoriesListSelector, filterProductsByAllIdSelector, productsSelector, searchSelector} from '../../../redux/selectors'
import Loader from '../../loader'
import {getPaginator, limit} from '../../../utilities/utils'
import {withRouter} from 'react-router'
import {createStructuredSelector} from 'reselect'


const CatalogContent = (props) => {
  //console.log('[CatalogContent][props]', props)
  const {location, match, filterProductsByAllId} = props

  const categories = useSelector(categoriesListSelector)
  const {restId} = match.params
  const category = categories.find((category) => category.urlCategoryName === restId)


  const {currentPage, offset} = getPaginator(location.search)
  const url = match.url

  if (!category) return <Loader />

  const {id, products} = category
  const productsCount = products.length


  let arr = products,
    brr = filterProductsByAllId,
    filtered = arr.filter(f => brr.includes(f));
  //console.log('filtered', filtered);


  return (
    <div className={styles.catalogContent}>
      <CatalogFilter />
      <CardsList products={filtered.length === 0 ? products : filtered} categoryId={id} />
      <PaginationUI total={productsCount} limit={limit} url={url} currentPage={currentPage} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  productsAllByHashMap: productsSelector,
  search: searchSelector,
  filterProductsByAllId: filterProductsByAllIdSelector
})

export default withRouter(connect(mapStateToProps)(CatalogContent))
