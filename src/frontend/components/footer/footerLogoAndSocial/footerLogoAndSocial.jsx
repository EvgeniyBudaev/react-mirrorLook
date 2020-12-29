import React from 'react'
import styles from '@/frontend/components/footer/footerLogoAndSocial/footerLogoAndSocial.module.scss'
import FooterLogo from '@/frontend/components/footer/footerLogoAndSocial/footerLogo'
import Facebook from '@/frontend/components/footer/footerLogoAndSocial/facebook'
import VK from '@/frontend/components/footer/footerLogoAndSocial/vk'
import Instagram from '@/frontend/components/footer/footerLogoAndSocial/instagram'
import Twitter from '@/frontend/components/footer/footerLogoAndSocial/twitter'

const FooterLogoAndSocial = () => {
  return (
    <>
      <div className={styles.footerLogo}>
        <FooterLogo />
      </div>
      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}>
          <Facebook />
        </div>
        <div className={styles.socialIcon}>
          <VK />
        </div>
        <div className={styles.socialIcon}>
          <Instagram />
        </div>
        <div className={styles.socialIcon}>
          <Twitter />
        </div>
      </div>
    </>
  )
}

export default FooterLogoAndSocial




