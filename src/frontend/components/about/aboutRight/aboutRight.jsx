import React from 'react'
import styles from '@/frontend/components/about/aboutRight/aboutRight.module.scss'
import AboutBasket from '@/frontend/components/about/aboutRight/aboutBasket'
import AboutViewed from '@/frontend/components/about/aboutRight/aboutViewed'

const AboutRight = () => {
  return (
    <div className={styles.aboutRight}>
      <AboutBasket />
      <AboutViewed />
    </div>
  )
}

export default AboutRight



