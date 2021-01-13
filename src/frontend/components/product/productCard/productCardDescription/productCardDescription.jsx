import React from 'react'
import styles from './productCardDescription.module.scss'
import iconFavorite from '../../../../../assets/images/icon-favorite.svg'
import wallet from '../../../../../assets/images/wallet.png'
import visa from '../../../../../assets/images/visa.png'
import master from '../../../../../assets/images/master.png'

const ProductCardDescription = ({description}) => {
  return (
    <div className={styles.description}>
      <div className={styles.descriptionText}>
        {description.map((info, index) => <p key={index}>{info}</p>)}
      </div>
      <div className={styles.descriptionInfo}>
        <div className={styles.descriptionInfoFavorites}>
          <a href="#">
            <img src={iconFavorite} alt="favorite" />
            <span>В избранное</span>
          </a>
        </div>
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
    </div>
  )
}

export default ProductCardDescription
