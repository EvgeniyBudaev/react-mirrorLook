import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"
import {useParams} from 'react-router-dom'
import styles from './catalog.module.scss'
import CatalogTop from './catalogTop/catalogTop'
import CatalogAside from './catalogAside'
import CatalogContent from './catalogContent'
import {addMatchParams} from "../../redux/actions/actions"

const Catalog = () => {
    // console.log('[Catalog][props]', props)
    const dispatch = useDispatch()
    const {restId} = useParams()

    useEffect(() => {
      dispatch(addMatchParams(restId))
    }, [addMatchParams, restId])

  return (
    <section className={styles.catalog}>
      <div className={styles.container}>
        <CatalogTop />
        <div className={styles.inner}>
          <CatalogAside />
          <CatalogContent />
        </div>
      </div>
    </section>
  )
}

export default Catalog






