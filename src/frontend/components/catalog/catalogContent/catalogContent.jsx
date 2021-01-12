import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {categoriesListSelector} from '../../../redux/selectors'
import Loader from '../../loader'
import {ROUTES} from "../../../routes"
import {getPaginator, limit} from '../../../utilities/utils'
import {withRouter} from 'react-router'


const CatalogContent = (props) => {
  console.log('[CatalogContent][props]', props)
  const {location, match} = props
  const categories = useSelector(categoriesListSelector)
  const {restId} = match.params
  const category = categories.find((category) => category.id === restId)


  const {currentPage, offset} = getPaginator(location.search)
  const url = match.url

  if (!category) return <Loader />
  console.log('[CatalogContent][category]', category)



  const {id, products} = category
  const productsCount = products.length

  return (
    <div className={styles.catalogContent}>
      <CatalogFilter />
      <CardsList products={products} categoryId={id} />
      <PaginationUI total={productsCount} limit={limit} url={url} currentPage={currentPage} />
      <Link to={ROUTES.CATALOG + id + "?took"}>go to</Link>
    </div>
  )
}

export default withRouter(CatalogContent)
