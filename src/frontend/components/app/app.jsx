import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from "@/frontend/components/header";
import styles from './app.module.scss'
import {ROUTES} from '@/frontend/routes'
import EmptyBlockToHomePage from '@/frontend/components/empty/emptyBlockToHomePage'
import SliderAsNavFor from '@/frontend/components/sliderAsNavFor'
import SimpleSlider from '@/frontend/components/slider'


const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
        <EmptyBlockToHomePage />
        {/*<SliderAsNavFor />*/}
        <SimpleSlider />
        <Switch>
          <Route path={ROUTES.HOME} component={() => <h1>Главная страница</h1>} exact  />
        </Switch>
      </div>
      <div className={styles.footer}></div>
    </div>
  )
}

export default App
