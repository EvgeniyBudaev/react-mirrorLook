import React from 'react'
import styles from '@/frontend/components/basket/basket.module.scss'
import BasketCard from '@/frontend/components/basket/basketCard'
import BasketBottom from '@/frontend/components/basket/basketBottom'


const Basket = () => {
  return (
    <section className={styles.basket}>
      <div className={styles.container}>
        <h2 className={styles.title}>Корзина</h2>
        <div className={styles.cards}>
          <BasketCard />
          <BasketBottom />
        </div>
      </div>
    </section>
  )
}

export default Basket



