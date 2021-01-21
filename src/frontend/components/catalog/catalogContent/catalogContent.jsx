import React, {useState} from 'react'
import {connect, useSelector} from 'react-redux'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {categoriesListSelector, searchProductsByAllIdSelector, productsSelector, searchSelector} from '../../../redux/selectors'
import Loader from '../../loader'
import {getPaginator, limit} from '../../../utilities/utils'
import {withRouter} from 'react-router'
import {createStructuredSelector} from 'reselect'
import CatalogFilterButtons from './catalogFilter/catalogFilterButtons'


const CatalogContent = (props) => {
  //console.log('[CatalogContent][props]', props)
  const {location, match, searchProductsByAllId} = props

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
    searched = arr.filter(f => brr.includes(f));
  //console.log('filtered', filtered);

  const handleClickBtnGrid = () => {
    setIsClickedBtnGrid(!isClickedBtnGrid)
  }

  return (
    <div className={styles.catalogContent}>
      <CatalogFilter isClickedBtnGrid={isClickedBtnGrid} handleClickBtnGrid={handleClickBtnGrid} />
      <CardsList products={searched.length === 0 ? products : searched} categoryId={id} isClickedBtnGrid={isClickedBtnGrid} />
      <PaginationUI total={productsCount} limit={limit} url={url} currentPage={currentPage} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  productsAllByHashMap: productsSelector,
  search: searchSelector,
  searchProductsByAllId: searchProductsByAllIdSelector
})

export default withRouter(connect(mapStateToProps)(CatalogContent))
