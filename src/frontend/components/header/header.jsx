import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Classnames from 'classnames'
import styles from './header.module.scss'
import useWindowScroll from '../../hooks/useWindowScroll'
import {handleWindowScroll} from '../../redux/actions/actions'
import Hamburger from '../hamburger'
import Logo from './logo'
import HeaderMenuTop from './headerMenuTop'
import HeaderMenuBottom from './headerMenuBottom'
import HeaderCategories from './headerCategories'
import EmptyBlockToHomePage from './empty'



const Header = () => {
  const offset = useSelector(state => state.windowScrollReducer.offset)
  const dispatch = useDispatch()

  const isOffset = useWindowScroll({timerLength: offset});
  //console.log('isOffset', isOffset)

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

