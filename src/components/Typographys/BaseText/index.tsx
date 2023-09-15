import styles from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export const BaseText = ({ children }: Props): React.ReactElement => {
  return <p className={styles.baseText}>{children}</p>
}
