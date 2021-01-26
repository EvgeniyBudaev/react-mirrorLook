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
  searchProductsByAllSelector, filterProductsByAllIdSelector
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
  //console.log('filter', filter)
  //console.log('productsAll', productsAll)

  const filterByForm = productsAll.filter(item => filter.includes(item.form))
  //console.log('filterByForm', filterByForm)
  const filterByColorFrame = productsAll.filter(item => filter.includes(item.colorFrame))
  //console.log('filterByColorFrame', filterByColorFrame)
  const filterByAll = [...filterByForm, ...filterByColorFrame]
  //console.log('filterByAll', filterByAll)

  // значения фильтров по типам на фронте
  // const colorFList = ['Античное золото', 'Античное серебро', 'Серебро', 'Золото', 'Бронза', 'Латунь', 'Хром', 'Никель', 'Шампань']
  // const formFList = ['Круглая', 'Прямоугольная', 'Фигурная']

  const filterProductsByAll = filterByAll.filter(item => {
    if (filter.includes(item.form) && !filter.includes(item.colorFrame)) {
      return filter.includes(item.form)
    }  if (filter.includes(item.colorFrame) && !filter.includes(item.form)) {
      return filter.includes(item.colorFrame)
    }  if (filter.includes(item.form) && filter.includes(item.colorFrame)) {
     // console.log('RES', filter.includes(item.form) && filter.includes(item.colorFrame))
      return filter.includes(item.form) && filter.includes(item.colorFrame)
    }
  })
  //console.log('filterProductsByAll', filterProductsByAll)

  const filterProductsByAllId = filterProductsByAll ? filterProductsByAll.map(item => item.id) : filterByAll.map(item => item.id)

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

  console.log('filter', filter)
  return (
    <div className={styles.catalogContent}>
      <CatalogFilter isClickedBtnGrid={isClickedBtnGrid} handleClickBtnGrid={handleClickBtnGrid} />
      <CardsList products={productsByAllFilter.length === 0 && filter.length === 0 ? products : productsByAllFilter} categoryId={id} isClickedBtnGrid={isClickedBtnGrid} />
      <PaginationUI total={productsCount} limit={limit} url={url} currentPage={currentPage} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  search: searchSelector,
  searchProductsByAll: searchProductsByAllSelector,
  productsAllByHashMap: productsSelector,
  filter: filterSelector,
  filterProductsByAllId: filterProductsByAllIdSelector
})

export default withRouter(connect(mapStateToProps)(CatalogContent))
