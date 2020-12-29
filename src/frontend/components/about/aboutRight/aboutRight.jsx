import React from 'react'
import styles from './aboutRight.module.scss'
import AboutBasket from '@/frontend/components/about/aboutRight/aboutBasket'

const AboutRight = () => {
  return (
    <div className={styles.aboutRight}>
      <AboutBasket />
    </div>
  )
}

export default AboutRight

