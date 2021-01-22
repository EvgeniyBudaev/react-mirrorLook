import React, {useState} from 'react'
import {connect, useSelector} from 'react-redux'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {
  categoriesListSelector,
  searchProductsByAllIdSelector,
  productsSelector,
  searchSelector,
  filterSelector
} from '../../../redux/selectors'
import Loader from '../../loader'
import {getPaginator, limit} from '../../../utilities/utils'
import {withRouter} from 'react-router'
import {createStructuredSelector} from 'reselect'


const CatalogContent = (props) => {
  //console.log('[CatalogContent][props]', props)
  const {location, match, searchProductsByAllId, productsAllByHashMap, filter} = props

  const [isClickedBtnGrid, setIsClickedBtnGrid] = useState(true)

  const categories = useSelector(categoriesListSelector)
  const {restId} = match.params
  const category = categories.find((category) => category.urlCategoryName === restId)


  const {currentPage, offset} = getPaginator(location.search)
  const url = match.url

  if (!category) return <Loader />

  const {id, products} = category
  const productsCount = products.length


  let arr = products,
    brr = searchProductsByAllId,
    searched = arr.filter(s => brr.includes(s));
  const productsBySearched = searched.length === 0 ? products : searched
  //console.log('filtered', filtered);
  const flag = Object.entries(filter)
  console.log('flag', flag)


  console.log('[filter]', filter)
  const productsAll = Object.values(productsAllByHashMap)
  //console.log('[productsAll]', productsAll)
  const filterProductsByAll = productsAll.filter(item => {
    return item.form === filter.checkbox && (filter.rectangular || filter.circular)
      //.indexOf(filter.circle) > -1;
  })
  //console.log('[filterProductsByAll]', filterProductsByAll)
  const filterProductsByAllId = filterProductsByAll.map(item => item.id)
  //console.log('[filterProductsByAllId]', filterProductsByAllId)
  let filtered = products.filter(f => filterProductsByAllId.includes(f))
  console.log('[filtered]', filtered)
  const productsByFiltered = filtered.length === 0 ? products : filtered

  const handleClickBtnGrid = () => {
    setIsClickedBtnGrid(!isClickedBtnGrid)
  }


  return (
    <div className={styles.catalogContent}>
      <CatalogFilter isClickedBtnGrid={isClickedBtnGrid} handleClickBtnGrid={handleClickBtnGrid} />
      <CardsList products={productsBySearched} categoryId={id} isClickedBtnGrid={isClickedBtnGrid} />
      <PaginationUI total={productsCount} limit={limit} url={url} currentPage={currentPage} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  search: searchSelector,
  searchProductsByAllId: searchProductsByAllIdSelector,
  productsAllByHashMap: productsSelector,
  filter: filterSelector,
})

export default withRouter(connect(mapStateToProps)(CatalogContent))
