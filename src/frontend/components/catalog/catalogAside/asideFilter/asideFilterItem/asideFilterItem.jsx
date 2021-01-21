import React from 'react'
import ClassNames from 'classnames'
import styles from './asideFilterItem.module.scss'
import AsideFilterItemContentBox from './asideFilterItemContentBox'
import IconArrowUp from '../../../../UI/icons/iconArrowUp'

const AsideFilterItem = ({handleClickBtnFilter}) => {
  const headerItem = ClassNames(styles.header, styles.filterItem, styles.active)
  return (
    <div className={styles.asideFilterItem}>
      <div className={headerItem}>
        <p className={styles.title}>Форма</p>
        <IconArrowUp />
      </div>
      <div className={styles.content}>
        <AsideFilterItemContentBox handleClickBtnFilter={handleClickBtnFilter} />
        {/*<AsideFilterItemContentBox />*/}
        {/*<AsideFilterItemContentBox />*/}
        {/*<AsideFilterItemContentBox />*/}
      </div>
    </div>
  )
}

export default AsideFilterItem

