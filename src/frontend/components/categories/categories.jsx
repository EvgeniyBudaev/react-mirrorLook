import React from 'react'
import styles from './categories.module.scss'
import CategoriesCard from './categoriesCard'
import LineInfo from '../lineInfo'


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




