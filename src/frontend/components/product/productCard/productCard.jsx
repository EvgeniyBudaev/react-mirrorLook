import React from 'react'
import styles from './productCard.module.scss'
import iconFavorite from '../../../../assets/images/icon-favorite.svg'
import ProductCardDescription from './productCardDescription'
import ProductCardData from './productCardData'
import ProductCardDetailed from './productCardDetailed'
import ProductCardSlider from './productCardSlider'


const ProductCard = (props) => {
  const {name, description} = props.product

  return (
    <>
      <section className={styles.productCard}>
        <div className={styles.container}>
          <h2 className={styles.title}>Венецианское зеркало</h2>
          <h2 className={styles.productName}>{name}</h2>
          <div className={styles.inner}>
            <ProductCardDescription description={description} />
            <ProductCardSlider product={props.product} />
            {/*<ProductCardData />*/}
          </div>
        </div>
      </section>
      <ProductCardDetailed />
    </>
  )
}

export default ProductCard





