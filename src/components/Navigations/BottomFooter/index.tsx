import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.scss'

export const BottomFooter = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/images/logo.png"
        alt="この世の終わりゲーミング"
        width={120}
        height={120}
        className={styles.logo}
      />
      <div className={styles.footerContent}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/news">NEWS</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/members">MEMBERS</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/sponsors">SPONSORS</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className={styles.copyright}>
          <p>
            <small>© 2023 @andmohiko</small>
          </p>
        </div>
      </div>
    </footer>
  )
}
