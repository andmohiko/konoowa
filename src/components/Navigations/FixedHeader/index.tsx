import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.scss'

import { HamburgerMenu } from '~/components/Navigations/HamburgerMenu'
import { useDisclosure } from '~/hooks/useDisclosure'

export const FixedHeader = (): React.ReactElement => {
  const [isOpen, handlers] = useDisclosure()
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="この世の終わりゲーミング"
            width={70}
            height={70}
          />
        </h1>
      </Link>
      <nav>
        <ul className={styles.menuPc}>
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
      </nav>
      <Image
        src="/images/svgs/menu.svg"
        alt="menu"
        width={40}
        height={40}
        className={styles.menuSp}
        onClick={handlers.onToggle}
      />

      {isOpen && <HamburgerMenu onClose={handlers.onClose} />}
    </header>
  )
}
