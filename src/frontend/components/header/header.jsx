import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Classnames from 'classnames'
import styles from './header.module.scss'
import Hamburger from '@/frontend/components/hamburger'
import Logo from '@/frontend/components/header/logo'
import HeaderMenuTop from '@/frontend/components/header/headerMenuTop'
import HeaderMenuBottom from '@/frontend/components/header/headerMenuBottom'
import HeaderCategories from '@/frontend/components/header/headerCategories'
import EmptyBlockToHomePage from '@/frontend/components/header/empty'
import useWindowScroll from '@/frontend/hooks/useWindowScroll'
import {handleWindowScroll} from '@/frontend/redux/actions/actions'


const Header = () => {
  const offset = useSelector(state => state.windowScrollReducer.offset)
  const dispatch = useDispatch()

  const isOffset = useWindowScroll({timerLength: offset});
  console.log('isOffset', isOffset)

  useEffect(() => {
    dispatch(handleWindowScroll(isOffset))
  }, [isOffset, dispatch])

const headerStyles = Classnames(styles.header, isOffset ? styles.sticky : null)

  return (
    <>
      <div className={headerStyles} data-type="header">
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

