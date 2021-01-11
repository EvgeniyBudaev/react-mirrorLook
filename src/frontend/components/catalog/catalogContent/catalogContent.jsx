import React from 'react'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {
  categorySelector,
} from '../../../redux/selectors'
import Loader from '../../loader'


const CatalogContent = (props) => {
  console.log('[CatalogContent][props]', props)
  const {category} = props
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

export default connect(
  createStructuredSelector({
    category: categorySelector,
  })
)(CatalogContent);




