import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import styles from './headerCategories.module.scss'
import {ROUTES} from '../../../routes'
import {connect} from 'react-redux'
import {
  categoriesListSelector,
  categoriesLoadedSelector,
  categoriesLoadingSelector,
  routingSelector,
} from '../../../redux/selectors'
import {currentCategory, loadCategories} from '../../../redux/actions/actions'
import Loader from '../../loader'
import {createStructuredSelector} from 'reselect'

const HeaderCategories = (props) => {
  //console.log('[HeaderCategories][props]', props)
  const {
    categories,
    loadCategories,
    loading,
    loaded,
    currentCategory,
    routing,
  } = props

  const {restId} = routing
  // console.log('restId', restId)
  const category = categories.find((category) => category.id === restId)
  //console.log('[HeaderCategories][category]', category)

  useEffect(() => {
    if (!loading && !loaded) loadCategories()
    if (category) currentCategory(category)
  }, [category, currentCategory, loadCategories, loading, loaded])

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
    routing: routingSelector,
  }),
  {loadCategories, currentCategory}
)(HeaderCategories)
