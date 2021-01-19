import React from 'react'
import {connect, useSelector} from 'react-redux'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {categoriesListSelector, productsSelector, searchSelector} from '../../../redux/selectors'
import Loader from '../../loader'
import {getPaginator, limit} from '../../../utilities/utils'
import {withRouter} from 'react-router'
import {createStructuredSelector} from 'reselect'


const CatalogContent = (props) => {
  //console.log('[CatalogContent][props]', props)
  const {location, match, productsAllByHashMap, search} = props

  const categories = useSelector(categoriesListSelector)
  const {restId} = match.params
  const category = categories.find((category) => category.urlCategoryName === restId)


  const {currentPage, offset} = getPaginator(location.search)
  const url = match.url

  if (!category) return <Loader />

  const {id, products} = category
  const productsCount = products.length
  //console.log('[CatalogContent][products]', products)

  const productsAll = Object.values(productsAllByHashMap)
  console.log('[CatalogContent][productsAllName]', productsAll)
  const filterProductsByAll = productsAll.filter(item => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  })
  const filterProductsByAllId = filterProductsByAll.map (item => item.id)
  //console.log('filterProductsByAll', filterProductsByAll)
  console.log('filterProductsByAllId', filterProductsByAllId)

  let arr = products,
    brr = filterProductsByAllId,
    filtered = arr.filter(f => brr.includes(f));
  console.log('filtered', filtered);


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
  search: searchSelector
})

export default withRouter(connect(mapStateToProps)(CatalogContent))
