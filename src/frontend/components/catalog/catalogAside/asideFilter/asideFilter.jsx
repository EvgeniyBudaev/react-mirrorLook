import React from 'react'
import styles from './asideFilter.module.scss'
import AsideFilterItem from './asideFilterItem'

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
