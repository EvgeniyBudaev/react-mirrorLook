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
import {createStructuredSelector} from 'reselect'
// import { matchPath, useLocation} from 'react-router'


const HeaderCategories = (props) => {
  //console.log('[HeaderCategories][props]', props)
  const {
    categories,
    loadCategories,
    loading,
    loaded,
  } = props

  // const location = useLocation()
  // const match = matchPath(location.pathname, {
  //   path: ROUTES.CATALOG + ":restId",
  //   exact: true,
  //   strict: false
  // })
  //console.log('[HeaderCategories][match]', match)


  useEffect(() => {
    if (!loading && !loaded) loadCategories()
  }, [loadCategories, loading, loaded])

  if (loading || !loaded) return <Loader />

  return (
    <>
      <ul className={styles.headerCategories}>
        {categories.map(({id, name, urlCategoryName}) => (
          <NavLink to={ROUTES.CATALOG + urlCategoryName} key={id}>
            <li
              className={styles.item}
              activeclassname={styles.active}
            >
              {name}
            </li>
          </NavLink>
        ))}
      </ul>
    </>
  )
}

export default connect(
  createStructuredSelector({
    categories: categoriesListSelector,
    loading: categoriesLoadingSelector,
    loaded: categoriesLoadedSelector,
  }),
  {loadCategories}
)(HeaderCategories)
