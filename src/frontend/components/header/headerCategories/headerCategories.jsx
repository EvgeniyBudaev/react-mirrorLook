import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './headerCategories.module.scss'
import {ROUTES} from '../../../routes'


const HeaderCategories = () => {
  return (
    <ul className={styles.headerCategories}>
      <NavLink to={ROUTES.CATALOG}>
        <li className={styles.item}>ВЕНЕЦИАНСКИЕ ЗЕРКАЛА</li>
      </NavLink>
      <NavLink to={ROUTES.FLOOR_MIRRORS}>
        <li className={styles.item}>НАПОЛЬНЫЕ ЗЕРКАЛА</li>
      </NavLink>
      <NavLink to={ROUTES.FRAME_MIRRORS}>
        <li className={styles.item}>ЗЕРКАЛА В РАМАХ</li>
      </NavLink>
      <NavLink to={ROUTES.MIRROR_PANELS}>
        <li className={styles.item}>ЗЕРКАЛЬНЫЕ ПАННО</li>
      </NavLink>
      <NavLink to={ROUTES.MIRRORS_SUN}>
        <li className={styles.item}>ЗЕРКАЛО-СОЛНЦЕ</li>
      </NavLink>
      <NavLink to={ROUTES.CONSOLES}>
        <li className={styles.item}>КОНСОЛИ</li>
      </NavLink>
    </ul>
  )
}

export default HeaderCategories
