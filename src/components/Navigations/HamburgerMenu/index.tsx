import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.scss'

type Props = {
  onClose: () => void
}

export const HamburgerMenu = ({ onClose }: Props): React.ReactElement => {
  return (
    <nav className={styles.hamburgerMenu}>
      <ul className={styles.menuList}>
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
      <button onClick={onClose}>
        <Image
          src="/images/svgs/close.svg"
          alt="close"
          width={40}
          height={40}
        />
        Close
      </button>
    </nav>
  )
}
