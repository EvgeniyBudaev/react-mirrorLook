import React from 'react'
import styles from './aboutBasket.module.scss'
import IconBasket from '../../../UI/icons/iconBasket'

const AboutBasket: React.FC = () => {
  return (
    <div className={styles.aboutBasket}>
      <IconBasket />
      <div className={styles.box}>
        <h6 className={styles.title}>Корзина</h6>
        <p className={styles.text}>Ваша корзина пуста</p>
      </div>
    </div>
  )
}

export default AboutBasket
