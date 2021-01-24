import React from 'react'
import styles from './categoriesCard.module.scss'
import cn from 'classnames'


const CategoriesCard = (props) => {
  const {name, images} = props
  const content = cn(styles.content, styles.hoverShadow)

  return (
    <>
      <div className={styles.categoriesCard}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.categoriesCard}>{name}</h2>
          </div>
          <div className={content}>
            <img src={images} alt="categories-images" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesCard
