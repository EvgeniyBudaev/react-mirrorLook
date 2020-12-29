import React from 'react'
import styles from '@/frontend/components/catalog/catalogAside/asideFilter/asideFilter.module.scss'
import AsideFilterItem from '@/frontend/components/catalog/catalogAside/asideFilter/asideFilterItem'

const AsideFilter = () => {
  return (
    <div className={styles.asideFilter}>
      <div>
        <form>
          <ul>
            <AsideFilterItem />
            <AsideFilterItem />
            <AsideFilterItem />
          </ul>
        </form>
      </div>
    </div>
  )
}

export default AsideFilter


