import React from 'react'
import styles from '@/frontend/components/categories/categories.module.scss'
import CategoriesCard from '@/frontend/components/categories/categoriesCard'
import LineInfo from '@/frontend/components/lineInfo'

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
        <LineInfo />
      </div>
    </section>
  )
}

export default Categories




