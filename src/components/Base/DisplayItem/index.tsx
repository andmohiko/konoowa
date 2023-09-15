import styles from './style.module.scss'

type Props = {
  label: string
  value: React.ReactNode | null | undefined
}

export const DisplayItem = ({ label, value }: Props) => {
  return value ? (
    <div className={styles.displayItem}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  ) : (
    <></>
  )
}
