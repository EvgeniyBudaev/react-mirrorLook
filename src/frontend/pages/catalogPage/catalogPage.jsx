import React from 'react'
import {Route, Switch} from 'react-router'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import Catalog from '../../components/catalog'
import {ROUTES} from '../../routes'
import {categoriesListSelector} from '../../redux/selectors'
import {loadCategories} from '../../redux/actions/actions'
import CategoriesPage from '../categoriesPage'


const CatalogPage = () => {
  return (
    <>
      <Switch>
        <Route path={ROUTES.CATALOG + ':restId'} component={Catalog} />
        <Route path={ROUTES.CATALOG} component={CategoriesPage} />
      </Switch>
    </>
  )
}

export default connect(  createStructuredSelector({
    categories: categoriesListSelector,
  }),
  {loadCategories})(CatalogPage)


