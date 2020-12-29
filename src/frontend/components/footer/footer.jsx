import React from 'react'
import classNames from 'classnames'
import styles from '@/frontend/components/footer/footer.module.scss'
import FooterLogoAndSocial from '@/frontend/components/footer/footerLogoAndSocial/footerLogoAndSocial'
import FooterForm from '@/frontend/components/footer/footerForm'
import FooterPolitics from '@/frontend/components/footer/footerPolitics'

const Footer = () => {
  const footerLogoAndSocial = classNames(styles.innerItem, styles.footerLogoAndSocial)
  const footerContacts = classNames(styles.innerItem, styles.footerContacts)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.innerItem}>
            <h4>Каталог</h4>
            <ul>
              <li><a href="#">Венецианские зеркала</a></li>
              <li><a href="#">Напольные зеркала</a></li>
              <li><a href="#">Зеркала в рамах</a></li>
              <li><a href="#">Зеркальные панно</a></li>
              <li><a href="#">Зеркало-солнце</a></li>
              <li><a href="#">Консоли</a></li>
            </ul>
          </div>
          <div className={styles.innerItem}>
            <h4>Информация</h4>
            <ul>
              <li><a href="#">О магазине</a></li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">Распродажа</a></li>
              <li><a href="#">Доставка и оплата</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className={styles.innerItem}>
            <h4>Подборки</h4>
            <ul>
              <li><a href="#">Скидки</a></li>
              <li><a href="#">Лидеры продаж</a></li>
              <li><a href="#">Новинки</a></li>
            </ul>
          </div>
          <div className={footerContacts}>
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:89261113968">+7 (926) 111-39-68</a></li>
              <li><a href="mailto:mirror-look@mail.ru">mirror-look@mail.ru</a></li>
              <li><p>г. Москва, ул. Рябиновая, 43 корпус 2</p></li>
            </ul>
          </div>
          <div className={footerLogoAndSocial}>
            <FooterLogoAndSocial />
          </div>
        </div>
        <FooterForm />
        <FooterPolitics />
      </div>
    </footer>
  )
}

export default Footer
