import React from 'react'
import styles from './catalogTop.module.scss'

const CatalogTop = () => {
  return (
    <div className={styles.catalogTop}>
      <div className={styles.box}>
        <h2 className={styles.title}>Венецианские зеркала</h2>
        {/*<span>1-13 из 600 товаров</span>*/}
      </div>
    </div>
  )
}

export default CatalogTop
