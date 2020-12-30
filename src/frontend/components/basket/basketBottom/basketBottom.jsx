import React from 'react'
import {Link} from 'react-router-dom'
import styles from '@/frontend/components/basket/basketBottom/basketBottom.module.scss'
import {ROUTES} from '@/frontend/routes'
import Button from '@/frontend/components/UI/button'

const BasketBottom = () => {
  return (
    <div className={styles.basketBottom}>
      <div className={styles.left}>
        <Link to={ROUTES.CATEGORIES}>Продолжить выбор товаров</Link>
      </div>
      <div className={styles.right}>
        <div className={styles.rightInfo}>
          <p>Итого: <span className={styles.semiBold}>30 000</span> рублей</p>
          <p>+ доставка в <Link to={ROUTES.DELIVERY}>г. Москва</Link></p>
          <p>1-2 дня <span className={styles.uppercase}>БЕСПЛАТНО</span></p>
          <p>
            Информация о условиях доставки будет уточнена после оформления заказа.
          </p>
        </div>
        <Link to={ROUTES.ORDER}>
          <Button text={'Оформить заказ'} />
        </Link>
      </div>
    </div>
  )
}

export default BasketBottom
