import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import styles from './header.module.scss'
import Hamburger from '@/frontend/components/hamburger'
import Logo from '@/frontend/components/header/logo'
import HeaderMenuTop from '@/frontend/components/header/headerMenuTop'
import HeaderMenuBottom from '@/frontend/components/header/headerMenuBottom'
import HeaderCategories from '@/frontend/components/header/headerCategories'
import EmptyBlockToHomePage from '@/frontend/components/header/empty'
import useWindowResize from '@/frontend/hooks/useWindowScroll'
import {handleWindowScroll} from '@/frontend/redux/actions/actions'


const Header = () => {
  const dispatch = useDispatch()
  const [offset, setOffset] = useState(100);
  const isOffset = useWindowResize({timerLength: offset});
  console.log('isOffset', isOffset)
  // useCallback(() => dispatch(handleWindowScroll()), [dispatch])


  return (
    <>
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
      <EmptyBlockToHomePage />
    </>
  )
}

export default Header

