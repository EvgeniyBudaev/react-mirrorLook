import React from 'react'
import styles from './productCard.module.scss'
import iconFavorite from '../../../../assets/images/icon-favorite.svg'
import CardSlider from '../../cardSlider'
import ProductCardDescription from './productCardDescription'
import ProductCardData from './productCardData'


const ProductCard = (props) => {
  const {name, description} = props.product

  return (
    <section className={styles.productCard}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Венецианское зеркало
          <a href="#">
            <img src={iconFavorite} alt="favorite" />
          </a>
        </h2>
        <h2 className={styles.productName}>{name}</h2>
        <div className={styles.inner}>
          <ProductCardDescription description={description} />
          <CardSlider />
          <ProductCardData />
        </div>
      </div>
    </section>
  )
}

export default ProductCard



