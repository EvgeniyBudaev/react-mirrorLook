import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ROUTES} from '@/frontend/routes'
import MainLayout from '@/frontend/layouts/mainLayout'
import HomePage from '@/frontend/pages/homePage'
import AboutPage from '@/frontend/pages/aboutPage'


const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} exact  />
        <Route path={ROUTES.ABOUT} component={AboutPage} exact  />
      </Switch>
    </MainLayout>
  )
}

export default App
