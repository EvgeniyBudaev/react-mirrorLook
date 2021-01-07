import React from 'react'
import styles from './aboutRight.module.scss'
import AboutBasket from './aboutBasket'
import AboutViewed from './aboutViewed'


const AboutRight = () => {
  return (
    <div className={styles.aboutRight}>
      <AboutBasket />
      <AboutViewed />
    </div>
  )
}

export default AboutRight



