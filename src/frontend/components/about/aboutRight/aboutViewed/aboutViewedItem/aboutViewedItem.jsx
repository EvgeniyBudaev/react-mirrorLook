import React from 'react'
import styles from '@/frontend/components/about/aboutRight/aboutViewed/aboutViewedItem/aboutViewedItem.module.scss'

import images1 from '@/assets/images/content/about-1.png'


const AboutViewedItem = () => {
  return (
      <div className={styles.item}>
        <div>
          <img src={images1} alt="images" />
        </div>
        <div>
          <p className={styles.contentTitle}>Зеркало в резной раме Florian Gold (Флориан)</p>
          <p className={styles.contentPrice}>Цена: 25 000  ₽</p>
        </div>
      </div>
  )
}

export default AboutViewedItem
