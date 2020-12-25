import React from 'react'
import {NavLink} from 'react-router-dom'
import {ROUTES} from '@/frontend/routes'
import classNames from 'classnames'
import styles from './headerMenuBottom.module.scss'

const HeaderMenuBottom = () => {
  const red = classNames(styles.red)
  const activeLink = {
    fontSize: '18px',
    lineHeight: 1.25,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    pointerEvents: 'none',
    cursor: 'default'
  }

  return (
    <div className={styles.headerMenuBottom}>
      <nav>
        <ul>
          <li><NavLink to={ROUTES.HOME} exact activeStyle={activeLink}>Главная</NavLink></li>
          <li><NavLink to={ROUTES.ABOUT} activeStyle={activeLink}>О магазине</NavLink></li>
          <li><NavLink to={ROUTES.CATEGORIES} activeStyle={activeLink}>Каталог</NavLink></li>
          <li><NavLink to={ROUTES.CLEARANCE_SALE} activeStyle={activeLink} className={red}>Распродажа</NavLink></li>
          <li><NavLink to={ROUTES.DELIVERY} activeStyle={activeLink}>Доставка и оплата</NavLink></li>
          <li><NavLink to={ROUTES.CONTACTS} activeStyle={activeLink}>Контакты</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderMenuBottom
