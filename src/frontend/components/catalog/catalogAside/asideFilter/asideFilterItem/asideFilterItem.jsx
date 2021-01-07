import React from 'react'
import ClassNames from 'classnames'
import styles from './asideFilterItem.module.scss'
import AsideFilterItemContentBox from './asideFilterItemContentBox'


const AsideFilterItem = () => {
  const headerItem = ClassNames(styles.header, styles.filterItem, styles.active)
  return (
    <div className={styles.asideFilterItem}>
      <div className={headerItem}>
        <p className={styles.title}>Форма</p>
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M1.4303 0L0 1.21337L8 8L16 1.21337L14.5697 0L8 5.57326L1.4303 0Z" fill="black" fillOpacity="0.8"/>
        </svg>
      </div>
      <div className={styles.content}>
        <AsideFilterItemContentBox />
        <AsideFilterItemContentBox />
        <AsideFilterItemContentBox />
        <AsideFilterItemContentBox />
      </div>
    </div>
  )
}

export default AsideFilterItem


