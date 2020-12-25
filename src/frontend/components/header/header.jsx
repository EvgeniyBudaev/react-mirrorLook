import React from 'react'
import styles from './header.module.scss'
import Hamburger from '@/frontend/components/hamburger'
import Logo from '@/frontend/components/logo'
import HeaderMenuTop from '@/frontend/components/header/headerMenuTop'
import HeaderMenuBottom from '@/frontend/components/header/headerMenuBottom'
import HeaderCategories from '@/frontend/components/header/headerCategories'


const Header = () => {
  return (
    <div className={styles.header} data-header="sticky" data-type="header">
      <div className={styles.container}>
        <div className={styles.innerMenuAndLogo}>
          <div className={styles.logoAndHamburger}>
            <Hamburger />
            <Logo />
          </div>
          <div className={styles.menu} data-headermenu="">
            <HeaderMenuTop />
            <HeaderMenuBottom />
          </div>
        </div>
        <HeaderCategories />
      </div>
    </div>
  )
}

export default Header

