import React, {useState} from 'react'
import {withRouter} from "react-router"
import styles from './headerMenuTop.module.scss'
import MenuTopCity from './menuTopCity'
import MenuTopButtons from './menuTopButtons'
import cn from 'classnames'
import Search from '../../search/search'
import {useLocation} from 'react-router'
import { matchPath } from "react-router"
import {ROUTES} from '../../../routes'


const HeaderMenuTop: React.FC = () => {
  const location = useLocation()
  const isCatalogPage = matchPath(location.pathname, {
    path: ROUTES.CATALOG + ":restId",
    exact: true,
    strict: false
  })

  const [isClickedIconSearch, setIsClickedIconSearch] = useState(false)
  const menuTopTel = cn(styles.menuTopTel, {[styles.isClickedIconSearch]: isClickedIconSearch})

  const handleClickIconSearch = () => {
    setIsClickedIconSearch(!isClickedIconSearch)
  }

  return (
    <div className={styles.menuTop}>
      <MenuTopCity isClickedIconSearch={isClickedIconSearch} />
      <a className={menuTopTel} href="tel:89261113978">
        +7 (926) 111-39-78
      </a>
      {
        isClickedIconSearch && isCatalogPage && <Search />
      }
      <MenuTopButtons isClickedIconSearch={isClickedIconSearch} handleClickIconSearch={handleClickIconSearch} />
    </div>
  )
}

export default withRouter(HeaderMenuTop)


