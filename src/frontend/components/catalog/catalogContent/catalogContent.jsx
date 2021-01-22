import React, {useState} from 'react'
import {connect, useSelector} from 'react-redux'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {
  categoriesListSelector,
  productsSelector,
  searchSelector,
  filterSelector,
  searchProductsByAllSelector
} from '../../../redux/selectors'
import Loader from '../../loader'
import {getPaginator, limit} from '../../../utilities/utils'
import {withRouter} from 'react-router'
import {createStructuredSelector} from 'reselect'


const CatalogContent = (props) => {
  //console.log('[CatalogContent][props]', props)
  const {location, match, searchProductsByAll, productsAllByHashMap, filter, search} = props

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
    brr = searchProductsByAll.map(x => x.id),
    searched = arr.filter(s => brr.includes(s));

  const productsAll = Object.values(productsAllByHashMap)
  const filterProductsByAll = productsAll.filter(item => filter.includes(item.form));
  const filterProductsByAllId = filterProductsByAll.map(item => item.id)

  let productsByAllFilter = [];

  if (filter.length) {
    productsByAllFilter = products.filter(productId => filterProductsByAllId.includes(productId))
  }

  if (search && searched.length) {
    if (productsByAllFilter.length) {
      productsByAllFilter = productsByAllFilter.filter(productId => searched.includes(productId))
    }
    else {
      productsByAllFilter = searched;
    }
  }

  const handleClickBtnGrid = () => {
    setIsClickedBtnGrid(!isClickedBtnGrid)
  }


  return (
    <div className={styles.catalogContent}>
      <CatalogFilter isClickedBtnGrid={isClickedBtnGrid} handleClickBtnGrid={handleClickBtnGrid} />
      <CardsList products={productsByAllFilter.length === 0 ? products : productsByAllFilter} categoryId={id} isClickedBtnGrid={isClickedBtnGrid} />
      <PaginationUI total={productsCount} limit={limit} url={url} currentPage={currentPage} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  search: searchSelector,
  searchProductsByAll: searchProductsByAllSelector,
  productsAllByHashMap: productsSelector,
  filter: filterSelector,
})

export default withRouter(connect(mapStateToProps)(CatalogContent))
