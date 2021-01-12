import React from 'react'
import styles from './mainLayout.module.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar'
import Bar from '../../components/proSidebar'

const MainLayout = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header />
          {props.children}
        </div>
        <div className={styles.footer}>
          <Footer />
          <Sidebar />
          <Bar />
        </div>
      </div>
    </>
  )
}

export default MainLayout
