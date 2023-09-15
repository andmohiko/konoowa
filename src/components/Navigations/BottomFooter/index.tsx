import styles from './style.module.scss'

export const BottomFooter = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>この世の終わりゲーミング</p>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>ABOUT</li>
        <li className={styles.menuItem}>NEWS</li>
        <li className={styles.menuItem}>MEMBERS</li>
        <li className={styles.menuItem}>SPONSERS</li>
        <li className={styles.menuItem}>CONTACT</li>
      </ul>
      <div className={styles.copyright}>
        <p>
          <small>© 2023 @andmohiko</small>
        </p>
      </div>
    </footer>
  )
}
