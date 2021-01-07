import React from 'react'
import {Link} from 'react-router-dom'
import ClassNames from 'classnames'
import styles from './breadcrumbs.module.scss'
import {ROUTES} from '../../routes'


const Breadcrumbs = () => {
  const list = ClassNames(styles.list, styles.mobileOverflow)

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <ul className={list}>
          <li className={styles.listItem}>
            <Link to={ROUTES.HOME}>Главная</Link>
          </li>
          <li className={styles.listItem}>
            <span>О магазине</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumbs
