import React from 'react'
import styles from './cardsList.module.scss'
import Card from '../../../card'
import {connect} from "react-redux";


const CardsList = (props) => {
  console.log('[CardsList][props]', props)
  const {category} = props

  return (
    <ul className={styles.cardsList}>
      {category && category.products.map(id => <Card key={id} id={id} />)}
    </ul>
  )
}


const mapStateToProps = state => ({
  category: state.categoryReducer.currentCategory
})

export default connect(mapStateToProps)(CardsList)
