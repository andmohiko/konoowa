import styles from './style.module.scss'

type Props = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string | null
}

export const TextInput = ({
  label,
  value,
  onChange,
  error,
}: Props): React.ReactElement => {
  return (
    <div className={styles.textInput}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
      <p className={styles.error}>{error ?? ' '}</p>
    </div>
  )
}
