import React from 'react'
import {useSelector} from 'react-redux'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'

import {
  categorySelector,
} from '../../../redux/selectors'
import Loader from '../../loader'


const CatalogContent = () => {
  //console.log('[CatalogContent][props]', props)
  const category = useSelector(categorySelector)

  if (!category) return <Loader />

  const {id, products} = category
  return (
    <div className={styles.catalogContent}>
      <CatalogFilter />
      <CardsList products={products} categoryId={id} />
      <PaginationUI />
    </div>
  )
}

export default CatalogContent


