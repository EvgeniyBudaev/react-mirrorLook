import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation, withRouter } from 'react-router'
import styles from './menuTopButtons.module.scss'
import IconBasket from '../../../UI/icons/iconBasket'
import {ROUTES} from '../../../../routes'
import SearchBtn from './searchBtn/searchBtn'
import { matchPath, RouteComponentProps } from 'react-router'
// import IconHeart from '../../UI/icons/iconHeart'


interface IMenuTopButtons {
  isClickedIconSearch: boolean,
  handleClickIconSearch: () => void
}

type PropsType = IMenuTopButtons & RouteComponentProps

const MenuTopButtons: React.FC<PropsType> = (props) => {
  const {isClickedIconSearch, handleClickIconSearch} = props
  //console.log('[MenuTopButtons][props]', props)

  const location = useLocation()
  const isCatalogPage = matchPath(location.pathname, {
    path: ROUTES.CATALOG + ":restId",
    exact: true,
    strict: false
  })
  // console.log('[MenuTopButtons][isCatalogPage]', isCatalogPage)


  return (
      <ul className={styles.menuTopButtons}>
        <li>
          {
            isCatalogPage && <SearchBtn isClickedIconSearch={isClickedIconSearch} handleClickIconSearch={handleClickIconSearch} />
          }

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

export default withRouter(MenuTopButtons)

