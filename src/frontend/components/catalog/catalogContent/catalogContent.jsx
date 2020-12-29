import React from 'react'
import styles from '@/frontend/components/catalog/catalogContent/catalogContent.module.scss'
import CatalogFilter from '@/frontend/components/catalog/catalogContent/catalogFilter/catalogFilter'
import CardsList from '@/frontend/components/catalog/catalogContent/cardsList'
import PaginationUI from '@/frontend/components/paginationUI'

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


