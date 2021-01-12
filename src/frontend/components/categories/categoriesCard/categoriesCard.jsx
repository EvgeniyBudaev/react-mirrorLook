import React from 'react'
import {Link} from 'react-router-dom'
import styles from './categoriesCard.module.scss'
import {ROUTES} from '../../../routes'

import images1 from '../../../../assets/images/content/catalog-1.jpg'

const CategoriesCard = () => {
  return (
    <Link to={ROUTES.CATALOG}>
      <div className={styles.categoriesCard}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.categoriesCard}>Венецианские зеркала</h2>
          </div>
          <div className={styles.content}>
            <img src={images1} alt="categories-images" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoriesCard
