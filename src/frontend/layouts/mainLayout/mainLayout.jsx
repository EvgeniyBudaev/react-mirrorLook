import React from 'react'
import {withRouter} from 'react-router'
import styles from './mainLayout.module.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import BreadcrumbsUI from '../../components/breadcrumbs/breadcrumbs'
// import Sidebar from '../../components/sidebar'
// import Bar from '../../components/proSidebar'

const MainLayout = (props) => {
  const {location} = props
  const pathNames = location.pathname.split("/").filter(x => x)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header />
          {
            pathNames.length === 0
              ? props.children
              : <>
                <BreadcrumbsUI />
                 {props.children}
                </>
          }
        </div>
        <div className={styles.footer}>
          <Footer />
          {/*<Sidebar />*/}
          {/*<Bar />*/}
        </div>
      </div>
    </>
  )
}

export default withRouter(MainLayout)
