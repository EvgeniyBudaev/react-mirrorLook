import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from "@/frontend/components/header";
import styles from './app.module.scss'
import {ROUTES} from '@/frontend/routes'


const App = () => {
  return (
    <div>
      <Header />
      {/*<Switch>*/}
      {/*  <Route path="/" component={() => <h1>Главная страница</h1>} exact  />*/}
      {/*  <Route path={ROUTES.REGISTRATION} component={Registration} exact />*/}
      {/*  <Route path={ROUTES.SEARCH} component={() => <h1>Страница поиска</h1>} exact />*/}
      {/*</Switch>*/}
    </div>
  )
}

export default App
