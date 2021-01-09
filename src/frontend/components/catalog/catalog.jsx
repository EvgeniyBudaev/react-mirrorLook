import React, {useEffect} from 'react'
import styles from './catalog.module.scss'
import CatalogTop from './catalogTop/catalogTop'
import CatalogAside from './catalogAside'
import CatalogContent from './catalogContent'
import {connect} from "react-redux"
import {addMatchParams} from "../../redux/actions/actions"

const Catalog = (props) => {
    //console.log('[Catalog][props]', props)
    const {match, addMatchParams} = props
    const {restId} = match.params

    useEffect(() => {
        addMatchParams(restId)
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

const mapStateToProps = state => ({
    stateRouting: state.routingReducer
})

const mapDispatchToProps = ({
    addMatchParams
})

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)



