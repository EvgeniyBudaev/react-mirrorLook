import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ROUTES} from '../../routes'
import MainLayout from '../../layouts/mainLayout'
import HomePage from '../../pages/homePage'
import AboutPage from '../../pages/aboutPage'
import CategoriesPage from '../../pages/categoriesPage'
import Basket from '../basket/basket'
import ProductPage from '../../pages/productPage/productPage'
import CatalogPage from '../../pages/catalogPage'

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} exact />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route path={ROUTES.CATEGORIES} component={CategoriesPage} />
        <Route path={ROUTES.CATALOG} component={CatalogPage} />
        <Route path={ROUTES.BASKET} component={Basket} />
        <Route path={ROUTES.PRODUCT + ":id"} component={ProductPage} />
      </Switch>
    </MainLayout>
  )
}

export default App
