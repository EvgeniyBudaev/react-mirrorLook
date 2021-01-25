import React from 'react'
import {withRouter} from 'react-router'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import styles from './breadcrumbs.module.scss'
import {ROUTES} from '../../routes'
import Typography from '@material-ui/core/Typography'
import {breadcrumbsTranslate} from '../../redux/utils'


const BreadcrumbsUI = (props) => {
  //console.log('[BreadcrumbsUI][props]', props)
  const {history, location : {pathname}} = props
  const pathNames = pathname.split("/").filter(x => x)

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs aria-label="breadcrumb">

          {
            pathNames.length > 0
          ? (<Link className={styles.link} color="inherit" onClick={() => history.push(ROUTES.HOME)}>Главная</Link>)
          : null
          }

          {
            pathNames.map((name, index) => {
              const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`
              const isLast = index === pathNames.length -1
              //console.log('name', name)
              const nameTranslate = breadcrumbsTranslate(name)

              return isLast
                ? (<Typography key={index}  color="textPrimary">{nameTranslate}</Typography>)
                : (<Link key={index} className={styles.link} color="inherit" onClick={() => history.push(routeTo)}>{nameTranslate}</Link>)
            })
          }

        </Breadcrumbs>
      </div>
    </div>
  )
}

export default withRouter(BreadcrumbsUI)

