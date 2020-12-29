import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ROUTES} from '@/frontend/routes'
import MainLayout from '@/frontend/layouts/mainLayout'
import HomePage from '@/frontend/pages/homePage'
import AboutPage from '@/frontend/pages/aboutPage'
import CategoriesPage from '@/frontend/pages/categoriesPage'
import Catalog from '@/frontend/components/catalog'


const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} exact  />
        <Route path={ROUTES.ABOUT} component={AboutPage} exact  />
        <Route path={ROUTES.CATEGORIES} component={CategoriesPage} exact  />
        <Route path={ROUTES.CATALOG} component={Catalog} exact  />
      </Switch>
    </MainLayout>
  )
}

export default App

