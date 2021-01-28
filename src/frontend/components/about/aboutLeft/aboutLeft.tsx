import React from 'react'
import styles from './aboutLeft.module.scss'

const AboutLeft: React.FC = () => {
  return (
    <div className={styles.aboutLeft}>
      <h2>О магазине</h2>
      <p>Здравствуйте!</p>
      <p>
        Интернет-магазин "Mirror look" основана дизайнером Владимиром Лыскиным.
      </p>
      <p>
        "Многолетний опыт работы со стеклом дал мне возможность завладеть
        секретами искусства создания произведений из стекла."
      </p>
      <p>
        Состаренные зеркала, витражи, особые стекла. Интерьеры со стеклом и
        предметы декора для вашего дома.
      </p>
    </div>
  )
}

export default AboutLeft
