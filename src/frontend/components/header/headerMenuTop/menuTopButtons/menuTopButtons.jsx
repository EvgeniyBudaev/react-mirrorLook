import React from 'react'
import {Link} from 'react-router-dom'
import styles from './menuTopButtons.module.scss'
import IconBasket from '../../../UI/icons/iconBasket'
import {ROUTES} from '../../../../routes'
import SearchBtn from './searchBtn/searchBtn'
// import IconHeart from '../../UI/icons/iconHeart'


const MenuTopButtons = () => {
  return (
      <ul className={styles.menuTopButtons}>
        <li>
          <SearchBtn />
        </li>
        {/*<li>*/}
        {/*  <Link to={ROUTES.HOME}>*/}
        {/*    <IconHeart />*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li>
          <Link to={ROUTES.BASKET}>
            <IconBasket />
          </Link>
        </li>
      </ul>
  )
}

export default MenuTopButtons

