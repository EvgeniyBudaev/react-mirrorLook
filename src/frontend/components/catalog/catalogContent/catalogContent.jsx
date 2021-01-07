import React from 'react'
import styles from './catalogContent.module.scss'
import CatalogFilter from './catalogFilter/catalogFilter'
import CardsList from './cardsList'
import PaginationUI from '../../paginationUI'


const CatalogContent = () => {
  return (
    <div className={styles.catalogContent}>
      <CatalogFilter />
      <CardsList />
      <PaginationUI />
    </div>
  )
}

export default CatalogContent


