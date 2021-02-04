import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './headerCategories.module.scss'
import {ROUTES} from '../../../routes'
import {connect} from 'react-redux'
import {
  categoriesListSelector,
  categoriesLoadedSelector,
  categoriesLoadingSelector,
} from '../../../redux/selectors'
import {loadCategories} from '../../../redux/actions/actions'
import Loader from '../../loader'
import {RootStateType} from '../../../redux/reducers'
import {HeaderCategoriesPopsType, MapStatePropsHeaderCategoriesType} from './types'
// import { matchPath, useLocation} from 'react-router'


const HeaderCategories: React.FC<HeaderCategoriesPopsType> = (props) => {
  //console.log('[HeaderCategories][props]', props)
  const {
    categories,
    loadCategories,
    loadingHeaderCategories,
    loadedHeaderCategories,
  } = props

  // const location = useLocation()
  // const match = matchPath(location.pathname, {
  //   path: ROUTES.CATALOG + ":restId",
  //   exact: true,
  //   strict: false
  // })
  //console.log('[HeaderCategories][match]', match)


  useEffect(() => {
    if (!loadingHeaderCategories && !loadedHeaderCategories) loadCategories()
  }, [loadCategories, loadingHeaderCategories, loadedHeaderCategories])

  if (loadingHeaderCategories || !loadedHeaderCategories) return <Loader />

  return (
    <>
      <ul className={styles.headerCategories}>
        {categories.map(({id, name, urlCategoryName}) => (
          <NavLink to={ROUTES.CATALOG + urlCategoryName} key={id} activeClassName={styles.active}>
            <li
              className={styles.item}
            >
              {name}
            </li>
          </NavLink>
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = (state: RootStateType): MapStatePropsHeaderCategoriesType => {
  return {
    categories: categoriesListSelector(state),
    loadingHeaderCategories: categoriesLoadingSelector(state),
    loadedHeaderCategories: categoriesLoadedSelector(state),
  }
}

export default connect(mapStateToProps,{loadCategories})(HeaderCategories)
