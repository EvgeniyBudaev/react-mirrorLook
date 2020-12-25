import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './headerCategories.module.scss'
import {ROUTES} from '@/frontend/routes'

const HeaderCategories = () => {
  return (
    <ul className={styles.HeaderCategories}>
      <NavLink to={ROUTES.VENETIAN_MIRRORS}>
        <li className={styles.HeaderCategoriesItem}>ВЕНЕЦИАНСКИЕ ЗЕРКАЛА</li>
      </NavLink>
      <NavLink to={ROUTES.FLOOR_MIRRORS}>
        <li className={styles.HeaderCategoriesItem}>НАПОЛЬНЫЕ ЗЕРКАЛА</li>
      </NavLink>
      <NavLink to={ROUTES.FRAME_MIRRORS}>
        <li className={styles.HeaderCategoriesItem}>ЗЕРКАЛА В РАМАХ</li>
      </NavLink>
      <NavLink to={ROUTES.MIRROR_PANELS}>
        <li className={styles.HeaderCategoriesItem}>ЗЕРКАЛЬНЫЕ ПАННО</li>
      </NavLink>
      <NavLink to={ROUTES.MIRRORS_SUN}>
        <li className={styles.HeaderCategoriesItem}>ЗЕРКАЛО-СОЛНЦЕ</li>
      </NavLink>
      <NavLink to={ROUTES.CONSOLES}>
        <li className={styles.HeaderCategoriesItem}>КОНСОЛИ</li>
      </NavLink>
    </ul>
  )
}

export default HeaderCategories
