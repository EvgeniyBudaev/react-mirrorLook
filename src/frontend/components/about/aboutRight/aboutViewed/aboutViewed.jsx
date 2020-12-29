import React from 'react'
import styles from '@/frontend/components/about/aboutRight/aboutViewed/aboutViewed.module.scss'
import AboutViewedItem from '@/frontend/components/about/aboutRight/aboutViewed/aboutViewedItem'


const AboutViewed = () => {
  return (
    <div className={styles.aboutViewed}>
      <h6 className={styles.title}>Недавно просмотренные</h6>
      <AboutViewedItem />
    </div>
  )
}

export default AboutViewed


