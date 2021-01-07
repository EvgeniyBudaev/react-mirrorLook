import React from 'react'
import styles from './productCard.module.scss'

import iconFavorite from '../../../../assets/images/icon-favorite.svg'
import wallet from '../../../../assets/images/wallet.png'
import visa from '../../../../assets/images/visa.png'
import master from '../../../../assets/images/master.png'
import CardSlider from '../../cardSlider'


const ProductCard = () => {
  return (
    <section className={styles.productCard}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Венецианское зеркало
          <a href="#">
            <img src={iconFavorite} alt="favorite" />
          </a>
        </h2>
        <h2 className={styles.productName}>Nikole (Николь)</h2>
        <div className={styles.inner}>
          <div className={styles.description}>
            <div className={styles.descriptionText}>
              <p>Влагостойкое серебряное зеркало в венецианском стиле Nikole (Николь), 80*110 см</p>
              <p>Зеркала в венецианском стиле никогда не выходят из моды, являясь примером высокого мастерства и предметом роскоши.</p>
            </div>
            <div className={styles.descriptionInfo}>
              <div className={styles.descriptionInfoFavorites}>
                <a href="#">
                  <img src={iconFavorite} alt="favorite" />
                    <span>В избранное</span>
                </a>
              </div>
              <ul className={styles.descriptionInfoList}>
                <li>Доставка в: <span className={styles.descriptionCity}>г. Москва</span></li>
                <li>Цена и сроки: <span>1-2 дня БЕСПЛАТНО</span></li>
                <li>Оплата: <span>При получении</span></li>
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
          <CardSlider />
        </div>
      </div>
    </section>
  )
}

export default ProductCard
