import React from 'react'
import {Route} from 'react-router'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Breadcrumbs from '../../components/breadcrumbs'
import Catalog from '../../components/catalog'
import {ROUTES} from '../../routes'
import {categoriesListSelector} from '../../redux/selectors'
import {loadCategories} from '../../redux/actions/actions'


const CatalogPage = (props) => {
  const {categories, match} = props

  return (
    <>
      <Breadcrumbs />
      <Route path={ROUTES.CATALOG + ':restId'} component={Catalog} />
    </>
  )
}

export default connect(  createStructuredSelector({
    categories: categoriesListSelector,
  }),
  {loadCategories})(CatalogPage)


