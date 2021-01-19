import React from 'react'
import styles from './headerMenuTop.module.scss'
import MenuTopCity from './menuTopCity'
import MenuTopButtons from './menuTopButtons'

const HeaderMenuTop = () => {
  return (
    <div className={styles.menuTop}>
      <MenuTopCity />
      <a className={styles.menuTopTel} href="tel:89261113978">
        +7 (926) 111-39-78
      </a>
      <MenuTopButtons />
    </div>
  )
}

export default HeaderMenuTop


