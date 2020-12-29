import React from 'react'
import styles from '@/frontend/components/catalog/catalogContent/cardsList/cardsList.module.scss'
import Card from '@/frontend/components/card'


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
