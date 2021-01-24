import React from 'react'
import styles from './categories.module.scss'
import CategoriesCard from './categoriesCard'
import LineInfo from '../lineInfo'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {categoriesListSelector} from '../../redux/selectors'
import {NavLink} from 'react-router-dom'
import {ROUTES} from '../../routes'

const Categories = (props) => {
  const {
    categories,
  } = props

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {categories.map(({id, name, images, urlCategoryName}) => (
            <NavLink to={ROUTES.CATALOG + urlCategoryName} key={id}>
                <CategoriesCard name={name} images={images}/>
            </NavLink>
          ))}
        </div>
        <LineInfo />
      </div>
    </section>
  )
}

export default connect(
  createStructuredSelector({
    categories: categoriesListSelector,
  })
)(Categories)


