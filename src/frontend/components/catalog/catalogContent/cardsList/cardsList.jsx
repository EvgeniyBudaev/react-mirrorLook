import React from 'react'
import styles from './cardsList.module.scss'
import Card from '../../../card'


const CardsList = () => {
  return (
    <ul className={styles.cardsList}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  )
}

export default CardsList
