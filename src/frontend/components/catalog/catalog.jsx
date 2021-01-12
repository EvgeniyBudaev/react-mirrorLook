import React from 'react'
import styles from './catalog.module.scss'
import CatalogTop from './catalogTop/catalogTop'
import CatalogAside from './catalogAside'
import CatalogContent from './catalogContent'

const Catalog = (props) => {
  console.log('[Catalog][props]', props)

  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <CatalogTop />
        <div className={styles.inner}>
          <CatalogAside />
          <CatalogContent />
        </div>
      </div>
    </section>
  )
}

export default Catalog
