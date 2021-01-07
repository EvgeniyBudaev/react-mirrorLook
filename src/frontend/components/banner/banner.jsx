import React from 'react'
import styles from './banner.module.scss'

import banner1 from '../../../assets/images/content/banner-1.png'
import banner2 from '../../../assets/images/content/banner-2.png'


const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.item}>
            <img src={banner1} alt="images" />
          </div>
          <div className={styles.item}>
            <div className={styles.centerText}>При покупке Зеркало + консоль</div>
            <div className={styles.centerDiscount}>СКИДКА 10%</div>
            <div className={styles.centerInfo}>*Подробности уточняйте у менеджера</div>
          </div>
          <div className={styles.item}>
            <img src={banner2} alt="images" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

