import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {categorySelector} from '../../../redux/selectors'
import Loader from '../../loader'
import {ROUTES} from "../../../routes"


const CatalogContent = (props) => {
  //console.log('[CatalogContent][props]', props)
  const category = useSelector(categorySelector)

  if (!category) return <Loader />

  const {id, products} = category
  const productsCount = products.length

  return (
    <div className={styles.catalogContent}>
      <CatalogFilter />
      <CardsList products={products} categoryId={id} />
      <PaginationUI total={productsCount} limit={1} url="/catalog/" currentPage={1} categoryId={id} />
      <Link to={ROUTES.CATALOG + id + "?took"}>go to</Link>
    </div>
  )
}

export default CatalogContent
