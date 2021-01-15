import React from 'react'
import styles from './productCardDelivery.module.scss'

import wallet from '../../../../../../../assets/images/wallet.png'
import visa from '../../../../../../../assets/images/visa.png'
import master from '../../../../../../../assets/images/master.png'

const ProductCardDelivery = () => {
  return (
    <div>
      <ul className={styles.descriptionInfoList}>
        <li>
          Доставка в:{' '}
          <span className={styles.descriptionCity}>г. Москва</span>
        </li>
        <li>
          Цена и сроки: <span>1-2 дня БЕСПЛАТНО</span>
        </li>
        <li>
          Оплата: <span>При получении</span>
        </li>
        <li className={styles.descriptionPay}>
          <a href="#">
            <img src={wallet} alt="pay" />
          </a>
          <a href="#">
            <img src={visa} alt="pay" />
          </a>
          <a href="#">
            <img src={master} alt="pay" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ProductCardDelivery
