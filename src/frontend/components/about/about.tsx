import React from 'react'
import styles from './about.module.scss'
import AboutLeft from './aboutLeft'
// import AboutRight from './aboutRight'

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <AboutLeft />
          {/*<AboutRight />*/}
        </div>
      </div>
    </section>
  )
}

export default About
