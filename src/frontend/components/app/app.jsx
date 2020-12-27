import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from "@/frontend/components/header";
import styles from './app.module.scss'
import {ROUTES} from '@/frontend/routes'
import SliderAsNavFor from '@/frontend/components/sliderAsNavFor'
import SliderNewProducts from '@/frontend/components/sliderNewProducts'
import Banner from '@/frontend/components/banner'
import SliderPopularProducts from '@/frontend/components/sliderPopularProducts'
import Footer from '@/frontend/components/footer'


const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/*<Header />*/}
        {/*<SliderAsNavFor />*/}
        <SliderNewProducts />
        {/*<Banner />*/}
        {/*<SliderPopularProducts />*/}
        {/*<Switch>*/}
        {/*  <Route path={ROUTES.HOME} component={() => <h1>Главная страница</h1>} exact  />*/}
        {/*</Switch>*/}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default App
