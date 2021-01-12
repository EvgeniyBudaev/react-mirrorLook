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
import {currentCategory, loadCategories} from '../../../redux/actions/actions'
import Loader from '../../loader'
import {createStructuredSelector} from 'reselect'
import {useLocation} from 'react-router'
import { matchPath } from "react-router"

const HeaderCategories = (props) => {
  //console.log('[HeaderCategories][props]', props)
  const {
    categories,
    loadCategories,
    loading,
    loaded,
    currentCategory,
  } = props

  const location = useLocation()
  const match = matchPath(location.pathname, {
    path: ROUTES.CATALOG + ":restId",
    exact: true,
    strict: false
  })


  useEffect(() => {
    if (!loading && !loaded) loadCategories()
    if (match) {
      const {restId} = match.params
      const category = categories.find((category) => category.id === restId)
      currentCategory(category)
    }

  }, [match, currentCategory, loadCategories, categories, loading, loaded])

  if (loading || !loaded) return <Loader />

  return (
    <>
      <ul className={styles.headerCategories}>
        {categories.map(({id, name}) => (
          <NavLink to={ROUTES.CATALOG + id} key={id}>
            <li
              key={id}
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
  {loadCategories, currentCategory}
)(HeaderCategories)
