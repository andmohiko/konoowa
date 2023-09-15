import styles from './style.module.scss'

type Props = {
  children: React.ReactNode
  level?: 'h1' | 'h2' | 'h3'
}

export const TitleText = ({
  children,
  level = 'h1',
}: Props): React.ReactElement => {
  if (level === 'h3') {
    return <h3 className={styles.h3}>{children}</h3>
  }
  if (level === 'h2') {
    return <h2 className={styles.h2}>{children}</h2>
  }
  return <h1 className={styles.h1}>{children}</h1>
}
