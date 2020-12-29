import React from 'react'
import styles from './mainLayout.module.scss'
import Header from '@/frontend/components/header'
import Footer from '@/frontend/components/footer'
import Sidebar from '@/frontend/components/sidebar'
import Bar from '@/frontend/components/proSidebar'

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