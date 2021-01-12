import React from 'react'
import styles from './aboutViewed.module.scss'
import AboutViewedItem from './aboutViewedItem'

const AboutViewed = () => {
  return (
    <div className={styles.aboutViewed}>
      <h6 className={styles.title}>Недавно просмотренные</h6>
      <AboutViewedItem />
    </div>
  )
}

export default AboutViewed
