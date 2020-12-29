import React from 'react'
import styles from '@/frontend/components/catalog/catalog.module.scss'
import CatalogTop from '@/frontend/components/catalog/catalogTop/catalogTop'
import CatalogAside from '@/frontend/components/catalog/catalogAside'

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <CatalogTop />
        <div className={styles.inner}>
          <CatalogAside />
        </div>
      </div>
    </section>
  )
}

export default Catalog



