import React from 'react'
import styles from './productCardDetailed.module.scss'
import FullWidthTabs from './fullWidthTabs'


const ProductCardDetailed = () => {
  return (
    <div className={styles.detailed}>
      <div className={styles.container}>
        <div className={styles.detailedTabs}>
          <FullWidthTabs />
        </div>
      </div>
    </div>
  )
}

export default ProductCardDetailed
