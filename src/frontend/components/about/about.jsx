import React from 'react'
import styles from '@/frontend/components/about/about.module.scss'
import AboutLeft from '@/frontend/components/about/aboutLeft'
import AboutRight from '@/frontend/components/about/aboutRight'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <AboutLeft />
          <AboutRight />
        </div>
      </div>
    </section>
  )
}

export default About
