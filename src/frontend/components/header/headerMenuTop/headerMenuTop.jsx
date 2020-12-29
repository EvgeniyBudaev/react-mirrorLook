import React from 'react'
import {Link} from 'react-router-dom'
import styles from './headerMenuTop.module.scss'
import {ROUTES} from '@/frontend/routes'
import IconBasket from '@/frontend/components/UI/icons/iconBasket'
import IconHeart from '@/frontend/components/UI/icons/iconHeart'
import IconSearch from '@/frontend/components/UI/icons/iconSearch'
import MenuTopCity from '@/frontend/components/header/headerMenuTop/menuTopCity'

const HeaderMenuTop = () => {
  return (
      <div className={styles.menuTop}>
        <MenuTopCity />
        <a className={styles.menuTopTel} href="tel:89261113978">+7 (926) 111-39-78</a>
        <ul className={styles.menuTopButtons}>
          <li>
            <a id="search" href="#">
              <IconSearch />
            </a>
          </li>
          <li>
            <a href="#">
              <IconHeart />
            </a>
          </li>
          <li>
            <Link to={ROUTES.BASKET}>
              <IconBasket />
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default HeaderMenuTop




