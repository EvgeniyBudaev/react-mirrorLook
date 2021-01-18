import React from 'react'
import {Link} from 'react-router-dom'
import styles from './headerMenuTop.module.scss'
import {ROUTES} from '../../../routes'
import MenuTopCity from './menuTopCity'
import IconSearch from '../../UI/icons/iconSearch'
import IconHeart from '../../UI/icons/iconHeart'
import IconBasket from '../../UI/icons/iconBasket'
import Search from '../../search'

const HeaderMenuTop = () => {
  return (
    <div className={styles.menuTop}>
      <MenuTopCity />
      <a className={styles.menuTopTel} href="tel:89261113978">
        +7 (926) 111-39-78
      </a>
      <ul className={styles.menuTopButtons}>
        <li>
          <Link id="search" to={ROUTES.HOME}>
            <Search />
            <IconSearch />
          </Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>
            <IconHeart />
          </Link>
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
